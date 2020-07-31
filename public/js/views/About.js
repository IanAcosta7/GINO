var _jsxFileName = 'src\\js\\views\\About.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
    _inherits(About, _React$Component);

    function About(props) {
        _classCallCheck(this, About);

        var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

        _this.state = {
            editMode: false,
            title: '',
            description: '',
            temp_title: '',
            temp_description: ''
        };
        _this.cancelAbout = _this.cancelAbout.bind(_this);
        _this.saveAbout = _this.saveAbout.bind(_this);
        _this.changeState = _this.changeState.bind(_this);
        return _this;
    }

    _createClass(About, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getAbout();
        }
    }, {
        key: 'changeState',
        value: function changeState(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'cancelAbout',
        value: function cancelAbout() {
            this.setState({
                temp_title: this.state.title,
                temp_description: this.state.description,
                editMode: false
            });
        }
    }, {
        key: 'getAbout',
        value: function getAbout() {
            var _this2 = this;

            var req = new Request(window.location.origin + '/get_content', {
                method: 'GET'
            });

            fetch(req).then(function (res) {
                if (res.ok) return res.json();
            }).then(function (json) {
                _this2.setState({
                    title: json.title,
                    description: json.description,
                    temp_title: json.title,
                    temp_description: json.description
                });
            }).catch(function (err) {
                return console.error(err);
            });
        }
    }, {
        key: 'saveAbout',
        value: function saveAbout() {
            var data = {
                title: this.state.temp_title,
                description: this.state.temp_description
            };

            var req = new Request(window.location.origin + '/edit_content', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            fetch(req).then(function (res) {
                if (res.status != 200) console.error("The content was not modified.");
            }).catch(function (err) {
                return console.error(err);
            });

            this.setState({
                title: this.state.temp_title,
                description: this.state.temp_description,
                editMode: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return React.createElement(
                'article',
                { className: 'about-article', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    },
                    __self: this
                },
                this.state.editMode ? React.createElement(
                    React.Fragment,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                        },
                        __self: this
                    },
                    React.createElement(
                        'form',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 91
                            },
                            __self: this
                        },
                        React.createElement('input', { name: 'temp_title', type: 'text', onChange: this.changeState, value: this.state.temp_title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                            },
                            __self: this
                        }),
                        React.createElement('textarea', { name: 'temp_description', onChange: this.changeState, value: this.state.temp_description, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 93
                            },
                            __self: this
                        }),
                        React.createElement(
                            'button',
                            { 'class': 'form-cancel-btn', type: 'button', onClick: this.cancelAbout, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 94
                                },
                                __self: this
                            },
                            'Cancelar'
                        ),
                        React.createElement(
                            'button',
                            { 'class': 'form-accept-btn', type: 'button', onClick: this.saveAbout, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 95
                                },
                                __self: this
                            },
                            'Guardar'
                        )
                    )
                ) : React.createElement(
                    React.Fragment,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 100
                        },
                        __self: this
                    },
                    React.createElement(
                        'h1',
                        { className: 'about-title', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            },
                            __self: this
                        },
                        this.state.title
                    ),
                    ' ',
                    this.props.isAdminLogged && React.createElement(
                        'button',
                        { className: 'edit-btn', onClick: function onClick() {
                                return _this3.setState({ editMode: true });
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            },
                            __self: this
                        },
                        'X'
                    ),
                    React.createElement(
                        'p',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            },
                            __self: this
                        },
                        this.state.description
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

export default About;