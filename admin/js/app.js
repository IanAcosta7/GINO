
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
        })
        .then(jsonData => {
            reqAdmin(jsonData.token);
        })
        .catch(err => console.error(err));
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
            //console.log(res + "!!!");
        })
        .catch(err => console.error(err));
}