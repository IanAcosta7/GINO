var _jsxFileName = "src\\js\\components\\Navbar.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar() {
        _classCallCheck(this, Navbar);

        return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
    }

    _createClass(Navbar, [{
        key: "closeSession",
        value: function closeSession() {
            document.cookie = "jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                { "class": "header", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    },
                    __self: this
                },
                React.createElement(
                    "div",
                    { "class": "header-content", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { "class": "header-logo", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 10
                            },
                            __self: this
                        },
                        React.createElement(
                            "a",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                },
                                __self: this
                            },
                            "GINO"
                        ),
                        React.createElement(
                            "small",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                },
                                __self: this
                            },
                            this.props.isAdminLogged ? 'Administrador' : ''
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "header-menu", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            },
                            __self: this
                        },
                        React.createElement(
                            "button",
                            { "class": "header-btn header-menu-btn", disabled: true, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 16
                                },
                                __self: this
                            },
                            "Inicio"
                        ),
                        React.createElement(
                            "button",
                            { "class": "header-btn header-menu-btn", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                },
                                __self: this
                            },
                            "Tienda"
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "header-opt", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            },
                            __self: this
                        },
                        React.createElement(
                            "button",
                            { "class": "header-btn header-close-btn", onClick: this.closeSession, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 21
                                },
                                __self: this
                            },
                            "Cerrar Sesi\xF3n"
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(React.Component);

export default Navbar;