import Navbar from './components/Navbar.js';
import Login from './components/Login.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAdminLogged: false
        };

        this.verifyLog = this.verifyLog.bind(this);
    }

    componentDidMount() {
        this.verifyLog();
    }

    verifyLog() {
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

    render() {
        return (
            <React.Fragment>
                <Navbar title="Main Page"/>

                { this.state.isAdminLogged && <h1>ADMIN!</h1> }

                <Login verifyLog={this.verifyLog}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);