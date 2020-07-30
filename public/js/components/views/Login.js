var _jsxFileName = "src\\js\\components\\views\\Login.js";

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
                if (res.ok) {
                    _this2.props.verifyLog();
                    _this2.props.changePage('About');
                    document.location.pathname = '/';
                } else throw new Error("Status " + res.status);
            }).catch(function (err) {
                // TODO LOAD ERROR PAGE
                console.error(err);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "article",
                { className: "login", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                    },
                    __self: this
                },
                React.createElement(
                    "form",
                    { className: "login-form", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        },
                        __self: this
                    },
                    React.createElement("input", { className: "form-input", name: "user", id: "user", placeHolder: "Nombre de usuario", value: this.state.user, onChange: this.handleChange, autocorrect: "off", autocapitalize: "off", spellcheck: "false", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 52
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 53
                        },
                        __self: this
                    }),
                    React.createElement("input", { className: "form-input", type: "password", name: "password", id: "password", placeHolder: "Contrase\xF1a", onChange: this.handleChange, autocorrect: "off", autocapitalize: "off", spellcheck: "false", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }),
                    React.createElement(
                        "button",
                        { className: "form-button", type: "button", onClick: this.login, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 56
                            },
                            __self: this
                        },
                        "Iniciar Sesion"
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

export default Login;