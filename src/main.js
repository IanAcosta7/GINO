
// class Navbar extends React.Component {
//     render() {
//         return <h1>Hello World from {this.props.title}!</h1>;
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Navbar title="Main Page"/>

//                 <form>
//                     <input type="email" name="email" id="email" placeHolder="Correo Electrónico"/>
//                     <br/>
//                     <input type="password" name="password" id="password" placeHolder="Contraseña"/>
//                     <br/>
//                     <button type="button" onClick="login()">Iniciar Sesión</button>
//                 </form>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);