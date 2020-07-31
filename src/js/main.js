import Navbar from './components/Navbar.js';
import Login from './views/Login.js';
import About from './views/About.js';
import Exposition from './views/Exposition.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdminLogged: false,
            pageComponent: About,
            page: 'About'
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
        switch (document.location.pathname) {
            case '/admin':
                this.changePage('Login');
                break;
            case '/articulos':
                this.changePage('Exposition');
                break;
        }
    }

    changePage(page, e) {
        const pages = {
            Login,
            About,
            Exposition
        }

        if (page === 'Exposition')
            window.history.pushState(null, null, '/articulos');
        else if (page === 'About')
            window.history.pushState(null, null, '/');

        this.setState({
            pageComponent: pages[page],
            page: pages[page].name
        });
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
                <Navbar page={this.state.page} changePage={this.changePage} changeAdminLog={this.changeAdminLog} isAdminLogged={this.state.isAdminLogged}/>

                <main className="main-content">
                    <this.state.pageComponent changePage={this.changePage} verifyLog={this.verifyLog} isAdminLogged={this.state.isAdminLogged}/>
                </main>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);