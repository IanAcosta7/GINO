import Navbar from './components/Navbar.js';
import Login from './components/Login.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar title="Main Page"/>

                <Login/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);