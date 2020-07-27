import Navbar from './components/Navbar.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar title="Main Page"/>

                <form>
                    <input type="email" name="email" id="email" placeHolder="Correo Electrónico"/>
                    <br/>
                    <input type="password" name="password" id="password" placeHolder="Contraseña"/>
                    <br/>
                    <button type="button" onClick={login}>Iniciar Sesión</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// === 
function login() {
    // Get and Encode user data
    const user = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const encoded = window.btoa(`${user}:${pass}`);

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
            reqAdmin(jsonData.token);
        })
        .catch(err => {
            // TODO LOAD ERROR PAGE
            console.error(err)
        });
}

function reqAdmin(token) {
    // Request al index de admin
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    const req = new Request(window.location.origin, {
        method: 'GET',
        credentials: 'same-origin',
        headers: headers,
    });

    fetch(req)
        .then(res => {
            if (res.ok) {
                return res.text();
            }
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            document.write(html);
        })
        .catch(err => console.error(err));
}