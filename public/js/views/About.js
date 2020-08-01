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

            if (this.state.title === '' || this.state.title == '') {
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
                React.Fragment,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 88
                    },
                    __self: this
                },
                React.createElement(
                    'article',
                    { className: 'front-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 89
                        },
                        __self: this
                    },
                    React.createElement(
                        'h1',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 90
                            },
                            __self: this
                        },
                        React.createElement(
                            'span',
                            { className: 'title', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 91
                                },
                                __self: this
                            },
                            'Titulo'
                        ),
                        React.createElement(
                            'span',
                            { className: 'subtitle', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 92
                                },
                                __self: this
                            },
                            'Un subtitulo mas largo'
                        )
                    )
                ),
                React.createElement(
                    'article',
                    { className: 'about-article', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        },
                        __self: this
                    },
                    this.state.editMode ? React.createElement(
                        React.Fragment,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                            },
                            __self: this
                        },
                        React.createElement(
                            'form',
                            { className: 'about-section-edit', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 100
                                },
                                __self: this
                            },
                            React.createElement('input', { name: 'temp_title', type: 'text', onChange: this.changeState, value: this.state.temp_title, autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 101
                                },
                                __self: this
                            }),
                            React.createElement('textarea', { name: 'temp_description', onChange: this.changeState, value: this.state.temp_description, autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 102
                                },
                                __self: this
                            }),
                            React.createElement(
                                'div',
                                { className: 'about-edit-buttons', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 104
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    'button',
                                    { 'class': 'form-cancel-btn', type: 'button', onClick: this.cancelAbout, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 105
                                        },
                                        __self: this
                                    },
                                    'Cancelar'
                                ),
                                React.createElement(
                                    'button',
                                    { 'class': 'form-accept-btn', type: 'button', onClick: this.saveAbout, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 106
                                        },
                                        __self: this
                                    },
                                    'Guardar'
                                )
                            )
                        )
                    ) : React.createElement(
                        React.Fragment,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 112
                            },
                            __self: this
                        },
                        React.createElement(
                            'section',
                            { className: 'about-section', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 113
                                },
                                __self: this
                            },
                            React.createElement(
                                'div',
                                { className: 'about', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 114
                                    },
                                    __self: this
                                },
                                React.createElement(
                                    'h2',
                                    { className: 'about-title', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 115
                                        },
                                        __self: this
                                    },
                                    this.state.title
                                ),
                                this.props.isAdminLogged && React.createElement(
                                    'button',
                                    { className: 'edit-btn', onClick: function onClick() {
                                            return _this3.setState({ editMode: true });
                                        }, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 118
                                        },
                                        __self: this
                                    },
                                    React.createElement('img', { src: 'img/icons/edit-24px.svg', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 118
                                        },
                                        __self: this
                                    })
                                )
                            ),
                            React.createElement(
                                'p',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 121
                                    },
                                    __self: this
                                },
                                this.state.description
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

export default About;