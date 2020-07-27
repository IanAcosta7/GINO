var _jsxFileName = 'src\\main.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// class Navbar extends React.Component {
//     render() {
//         return <h1>Hello World from {this.props.title}!</h1>;
//     }
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Navbar title="Main Page"/>

//                 <form>
//                     <input type="email" name="email" id="email" placeHolder="Correo Electrónico"/>
//                     <br/>
//                     <input type="password" name="password" id="password" placeHolder="Contraseña"/>
//                     <br/>
//                     <button type="button" onClick="login()">Iniciar Sesión</button>
//                 </form>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                    },
                    __self: this
                },
                React.createElement(
                    'h1',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    },
                    'Hello, world!'
                ),
                React.createElement(
                    'h2',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    },
                    'It is ',
                    this.state.date.toLocaleTimeString(),
                    '.'
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 62
    },
    __self: this
}), document.getElementById('root'));