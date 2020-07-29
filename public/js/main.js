var _jsxFileName = 'src\\js\\main.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Navbar from './components/Navbar.js';
import Login from './components/views/Login.js';
import About from './components/views/About.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            isAdminLogged: false,
            page: About
        };

        _this.verifyLog = _this.verifyLog.bind(_this);
        _this.changePage = _this.changePage.bind(_this);
        _this.changeAdminLog = _this.changeAdminLog.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.checkPage();
            this.verifyLog();
        }
    }, {
        key: 'checkPage',
        value: function checkPage() {
            if (document.location.pathname === '/admin') this.changePage('Login');
        }
    }, {
        key: 'changePage',
        value: function changePage(page) {
            var pages = {
                Login: Login,
                About: About
            };

            this.setState({ page: pages[page] });
        }
    }, {
        key: 'changeAdminLog',
        value: function changeAdminLog(value) {
            this.setState({ isAdminLogged: value });
        }
    }, {
        key: 'verifyLog',
        value: function verifyLog() {
            var _this2 = this;

            var cookies = document.cookie.length > 0 ? document.cookie.split(' ') : null;
            var jwtCookie = cookies != null ? cookies.filter(function (cookie) {
                return cookie.substr(0, 3) === 'jwt';
            }) : [];

            // Si la cookie de JWT esta establecida se intenta el logueo
            if (jwtCookie.length > 0) {
                var req = new Request(window.location.origin + '/auth', {
                    method: 'GET',
                    credentials: 'same-origin'
                });

                fetch(req).then(function (res) {
                    _this2.setState({
                        isAdminLogged: res.ok
                    });

                    if (!res.ok) console.log('Status ' + res.status);
                }).catch(function (err) {
                    // TODO LOAD ERROR PAGE
                    console.error(err);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    },
                    __self: this
                },
                React.createElement(Navbar, { changePage: this.changePage, changeAdminLog: this.changeAdminLog, isAdminLogged: this.state.isAdminLogged, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 72
                    },
                    __self: this
                }),
                this.state.page === Login ? React.createElement(this.state.page, { changePage: this.changePage, verifyLog: this.verifyLog, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                    },
                    __self: this
                }) : React.createElement(this.state.page, { changePage: this.changePage, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    },
                    __self: this
                })
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 85
    },
    __self: this
}), document.getElementById('root'));