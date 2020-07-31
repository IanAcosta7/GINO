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
            <article className="about-article">
                {
                    this.state.editMode ?
                    (
                        <React.Fragment>
                            <form>
                                <input name="temp_title" type="text" onChange={this.changeState} value={this.state.temp_title}></input>
                                <textarea name="temp_description" onChange={this.changeState} value={this.state.temp_description}></textarea>
                                <button class="form-cancel-btn" type="button" onClick={this.cancelAbout}>Cancelar</button>
                                <button class="form-accept-btn" type="button" onClick={this.saveAbout}>Guardar</button>
                            </form>
                        </React.Fragment>
                    ) : 
                    (
                        <React.Fragment>
                            <h1 className="about-title">{ this.state.title }</h1> {this.props.isAdminLogged && <button className="edit-btn" onClick={() => this.setState({ editMode: true })}>X</button>}
                            <p>{ this.state.description }</p>
                        </React.Fragment>
                    )
                }
            </article>
        );
    }
}