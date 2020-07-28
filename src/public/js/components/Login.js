
var AdminPanel;

export default class Login extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: "",
            adminLogged: false
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
                if (res.ok)
                    return res.json();
                throw new Error(`Status ${res.status}`);
            })
            .then(jsonData => {
                this.reqAdmin(jsonData.token);
            })
            .catch(err => {
                // TODO LOAD ERROR PAGE
                console.error(err)
            });
    }

    reqAdmin(token) {
        // Request al index de admin
        let headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
    
        const req = new Request(window.location.origin, {
            method: 'GET',
            credentials: 'same-origin',
            headers: headers,
        });
    
        // fetch(req)
        //     .then(res => {
        //         if (res.ok) {
        //             return res.text();
        //         }
        //     })
        //     .then(html => {
        //         const parser = new DOMParser();
        //         const doc = parser.parseFromString(html, 'text/html');
    
        //         document.write(html);
        //     })
        //     .catch(err => console.error(err));

        fetch(req)
            .then(res => {
                if (res.ok) {
                    return res.text();
                }
            })
            .then(js => {
                AdminPanel = eval(js);
                this.setState({
                    adminLogged: true
                });             
            })
            .catch(err => console.error(err));
    }
    
    render() {
        return (
            <form>
                <input name="user" id="user" placeHolder="Nombre de usuario" value={this.state.user} onChange={this.handleChange}/>
                <br/>
                <input type="password" name="password" id="password" placeHolder="Contraseña" onChange={this.handleChange}/>
                <br/>
                <button type="button" onClick={this.login}>Iniciar Sesión</button>

                {
                    this.state.adminLogged ?
                    <AdminPanel></AdminPanel> :
                    <div>hi</div>
                }
            </form>
        );
    }
}