export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            title: '',
            description: '',
            temp_title: '',
            temp_description: ''
        };
        this.cancelAbout = this.cancelAbout.bind(this);
        this.saveAbout = this.saveAbout.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        this.getAbout()
    }

    changeState(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    cancelAbout() {
        this.setState({
            temp_title: this.state.title,
            temp_description: this.state.description,
            editMode: false
        });
    }

    getAbout() {
        if (this.state.title === '' || this.state.title == '') {
            const req = new Request(`${window.location.origin}/get_content`, {
                method: 'GET'
            });

            fetch(req)
                .then(res => {
                    if (res.ok)
                        return res.json();
                })
                .then(json => {
                    this.setState({
                        title: json.title,
                        description: json.description,
                        temp_title: json.title,
                        temp_description: json.description
                    });
                })
                .catch(err => console.error(err));
        }
    }

    saveAbout() {
        const data = {
            title: this.state.temp_title,
            description: this.state.temp_description
        };

        const req = new Request(`${window.location.origin}/edit_content`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        fetch(req)
            .then(res => {
                if (res.status != 200)
                    console.error("The content was not modified.");
            })
            .catch(err => console.error(err));

        this.setState({
            title: this.state.temp_title,
            description: this.state.temp_description,
            editMode: false
        });
    }

    render() {
        return (
            <React.Fragment>
                <article className="front-title">
                    <h1>
                        <span className="title">Titulo</span>
                        <span className="subtitle">Un subtitulo mas largo</span>
                    </h1>
                </article>
                <article className="about-article">
                    {
                        this.state.editMode ?
                        (
                            <React.Fragment>
                                <form className="about-section-edit">
                                    <input name="temp_title" type="text" onChange={this.changeState} value={this.state.temp_title} autocorrect="off" autocapitalize="off" spellcheck="false"></input>
                                    <textarea name="temp_description" onChange={this.changeState} value={this.state.temp_description} autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>

                                    <div className="about-edit-buttons">
                                        <button class="form-cancel-btn" type="button" onClick={this.cancelAbout}>Cancelar</button>
                                        <button class="form-accept-btn" type="button" onClick={this.saveAbout}>Guardar</button>
                                    </div>
                                </form>
                            </React.Fragment>
                        ) : 
                        (
                            <React.Fragment>
                                <section  className="about-section">
                                    <div className="about">
                                        <h2 className="about-title">{ this.state.title }</h2>
                                        {
                                            this.props.isAdminLogged &&
                                            <button className="edit-btn" onClick={() => this.setState({ editMode: true })}><img src="img/icons/edit-24px.svg"></img></button>
                                        }
                                    </div>
                                    <p>{ this.state.description }</p>
                                </section>
                            </React.Fragment>
                        )
                    }
                </article>
            </React.Fragment>
        );
    }
}