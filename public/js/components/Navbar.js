var _jsxFileName = 'src\\js\\components\\Navbar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.closeSession = _this.closeSession.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: 'closeSession',
        value: function closeSession() {
            document.cookie = 'jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            this.props.changePage('About');
            this.props.changeAdminLog(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var headerMenu = React.createElement(
                React.Fragment,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    },
                    __self: this
                },
                React.createElement(
                    'button',
                    { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                            return _this2.props.changePage('About', e);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        },
                        __self: this
                    },
                    'Inicio'
                ),
                React.createElement(
                    'button',
                    { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                            return _this2.props.changePage('Exposition', e);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        },
                        __self: this
                    },
                    'Tienda'
                )
            );

            if (this.props.page === 'About') {
                headerMenu = React.createElement(
                    React.Fragment,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        },
                        __self: this
                    },
                    React.createElement(
                        'button',
                        { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                                return _this2.props.changePage('About', e);
                            }, disabled: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            },
                            __self: this
                        },
                        'Inicio'
                    ),
                    React.createElement(
                        'button',
                        { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                                return _this2.props.changePage('Exposition', e);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            },
                            __self: this
                        },
                        'Tienda'
                    )
                );
            } else if (this.props.page === 'Exposition') {
                headerMenu = React.createElement(
                    React.Fragment,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: this
                    },
                    React.createElement(
                        'button',
                        { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                                return _this2.props.changePage('About', e);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            },
                            __self: this
                        },
                        'Inicio'
                    ),
                    React.createElement(
                        'button',
                        { className: 'header-btn header-menu-btn', onClick: function onClick(e) {
                                return _this2.props.changePage('Exposition', e);
                            }, disabled: true, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            },
                            __self: this
                        },
                        'Tienda'
                    )
                );
            }

            return React.createElement(
                'header',
                { 'class': 'header', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    },
                    __self: this
                },
                React.createElement(
                    'nav',
                    { 'class': 'header-content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        },
                        __self: this
                    },
                    React.createElement(
                        'div',
                        { 'class': 'header-logo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 42
                            },
                            __self: this
                        },
                        React.createElement(
                            'a',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 43
                                },
                                __self: this
                            },
                            'GINO'
                        ),
                        React.createElement(
                            'small',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                },
                                __self: this
                            },
                            this.props.isAdminLogged ? 'Administrador' : ''
                        )
                    ),
                    React.createElement(
                        'div',
                        { 'class': 'header-menu', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            },
                            __self: this
                        },
                        headerMenu
                    ),
                    this.props.isAdminLogged && React.createElement(
                        'div',
                        { 'class': 'header-opt', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                            },
                            __self: this
                        },
                        React.createElement(
                            'button',
                            { 'class': 'header-btn header-close-btn', onClick: this.closeSession, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 55
                                },
                                __self: this
                            },
                            'Cerrar Sesi\xF3n'
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

export default Navbar;