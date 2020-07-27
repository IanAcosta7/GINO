var _jsxFileName = "src\\main.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Navbar from './components/Navbar.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    },
                    __self: this
                },
                React.createElement(Navbar, { title: "Main Page", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    },
                    __self: this
                }),
                React.createElement(
                    "form",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        },
                        __self: this
                    },
                    React.createElement("input", { type: "email", name: "email", id: "email", placeHolder: "Correo Electr\xF3nico", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        },
                        __self: this
                    }),
                    React.createElement("input", { type: "password", name: "password", id: "password", placeHolder: "Contrase\xF1a", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 12
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        },
                        __self: this
                    }),
                    React.createElement(
                        "button",
                        { type: "button", onClick: login, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            },
                            __self: this
                        },
                        "Iniciar Sesi\xF3n"
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 22
    },
    __self: this
}), document.getElementById('root'));

// === 
function login() {
    // Get and Encode user data
    var user = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var encoded = window.btoa(user + ":" + pass);

    var uri = window.location.origin + "/login";
    var headers = new Headers();

    headers.append('Authorization', "Basic " + encoded);

    var req = new Request(uri, {
        method: 'POST',
        credentials: 'same-origin',
        headers: headers
    });

    fetch(req).then(function (res) {
        if (res.ok) return res.json();
        throw new Error("Status " + res.status);
    }).then(function (jsonData) {
        reqAdmin(jsonData.token);
    }).catch(function (err) {
        // TODO LOAD ERROR PAGE
        console.error(err);
    });
}

function reqAdmin(token) {
    // Request al index de admin
    var headers = new Headers();
    headers.append('Authorization', "Bearer " + token);

    var req = new Request(window.location.origin, {
        method: 'GET',
        credentials: 'same-origin',
        headers: headers
    });

    fetch(req).then(function (res) {
        if (res.ok) {
            return res.text();
        }
    }).then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');

        document.write(html);
    }).catch(function (err) {
        return console.error(err);
    });
}