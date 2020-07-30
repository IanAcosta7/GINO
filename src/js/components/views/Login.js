export default class Login extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login() {
        const encoded = window.btoa(`${this.state.user}:${this.state.password}`);
    
        const uri = `${window.location.origin}/login`;
        const headers = new Headers();
    
        headers.append('Authorization', `Basic ${encoded}`);
    
        const req = new Request(uri, {
            method: 'POST',
            credentials: 'same-origin',
            headers: headers,
        });
    
        fetch(req)
            .then(res => {
                if (res.ok) {
                    this.props.verifyLog();
                    this.props.changePage('About');
                    document.location.pathname = '/';
                }
                else
                    throw new Error(`Status ${res.status}`);
            })
            .catch(err => {
                // TODO LOAD ERROR PAGE
                console.error(err)
            });
    }
    
    render() {
        return (
            <article className="login">
                <form className="login-form">
                    <input className="form-input" name="user" id="user" placeHolder="Nombre de usuario" value={this.state.user} onChange={this.handleChange} autocorrect="off" autocapitalize="off" spellcheck="false"/>
                    <br/>
                    <input className="form-input" type="password" name="password" id="password" placeHolder="Contraseña" onChange={this.handleChange} autocorrect="off" autocapitalize="off" spellcheck="false"/>
                    <br/>
                    <button className="form-button" type="button" onClick={this.login}>Iniciar Sesion</button>
                </form>
            </article>
        );
    }
}