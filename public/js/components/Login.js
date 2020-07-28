var _jsxFileName = "src\\js\\components\\Login.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            user: "",
            password: ""
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.login = _this.login.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: "handleChange",
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: "login",
        value: function login() {
            var _this2 = this;

            var encoded = window.btoa(this.state.user + ":" + this.state.password);

            var uri = window.location.origin + "/login";
            var headers = new Headers();

            headers.append('Authorization', "Basic " + encoded);

            var req = new Request(uri, {
                method: 'POST',
                credentials: 'same-origin',
                headers: headers
            });

            fetch(req).then(function (res) {
                if (res.ok) _this2.props.verifyLog();else throw new Error("Status " + res.status);
            }).catch(function (err) {
                // TODO LOAD ERROR PAGE
                console.error(err);
            });
        }

        // reqAdmin(token) {
        //     // Request al index de admin
        //     let headers = new Headers();
        //     headers.append('Authorization', `Bearer ${token}`);

        //     const req = new Request(window.location.origin, {
        //         method: 'GET',
        //         credentials: 'same-origin',
        //         headers: headers,
        //     });

        //     fetch(req)
        //         .then(res => {
        //             if (res.ok) {
        //                 return res.text();
        //             }
        //         })
        //         .then(html => {
        //             const parser = new DOMParser();
        //             const doc = parser.parseFromString(html, 'text/html');

        //             document.write(html);
        //         })
        //         .catch(err => console.error(err));
        // }

    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 73
                    },
                    __self: this
                },
                React.createElement("input", { name: "user", id: "user", placeHolder: "Nombre de usuario", value: this.state.user, onChange: this.handleChange, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    },
                    __self: this
                }),
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    },
                    __self: this
                }),
                React.createElement("input", { type: "password", name: "password", id: "password", placeHolder: "Contrase\xF1a", onChange: this.handleChange, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    },
                    __self: this
                }),
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    },
                    __self: this
                }),
                React.createElement(
                    "button",
                    { type: "button", onClick: this.login, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        },
                        __self: this
                    },
                    "Iniciar Sesi\xF3n"
                )
            );
        }
    }]);

    return Login;
}(React.Component);

export default Login;