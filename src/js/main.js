import Navbar from './components/Navbar.js';
import Login from './components/views/Login.js';
import About from './components/views/About.js'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdminLogged: false,
            page: About
        };

        this.verifyLog = this.verifyLog.bind(this);
        this.changePage = this.changePage.bind(this);
        this.changeAdminLog = this.changeAdminLog.bind(this);
    }

    componentDidMount() {
        this.checkPage();
        this.verifyLog();
    }

    checkPage() {
        if (document.location.pathname === '/admin')
            this.changePage('Login');
    }

    changePage(page) {
        const pages = {
            Login,
            About
        }

        this.setState({ page: pages[page] });
    }

    changeAdminLog(value) {
        this.setState({ isAdminLogged: value });
    }

    verifyLog() {
        const cookies = document.cookie.length > 0 ? document.cookie.split(' ') : null;
        const jwtCookie = cookies != null ? cookies.filter(cookie => cookie.substr(0, 3) === 'jwt') : [];

        // Si la cookie de JWT esta establecida se intenta el logueo
        if (jwtCookie.length > 0) {
            const req = new Request(`${window.location.origin}/auth`, {
                method: 'GET',
                credentials: 'same-origin',
            });
        
            fetch(req)
                .then(res => {
                    this.setState({
                        isAdminLogged: res.ok
                    });
    
                    if (!res.ok)
                        console.log(`Status ${res.status}`);
                })
                .catch(err => {
                    // TODO LOAD ERROR PAGE
                    console.error(err)
                });
        }    
    }

    render() {
        return (
            <React.Fragment>
                <Navbar changePage={this.changePage} changeAdminLog={this.changeAdminLog} isAdminLogged={this.state.isAdminLogged}/>

                {
                    this.state.page === Login ?
                    <this.state.page changePage={this.changePage} verifyLog={this.verifyLog}/> :
                    <this.state.page changePage={this.changePage}/>
                }
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);