export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.closeSession = this.closeSession.bind(this);
    }

    closeSession() {
        document.cookie = `jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
        this.props.changePage('About');
        this.props.changeAdminLog(false);
    }

    render() {
        let headerMenu = (
            <React.Fragment>
                <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('About', e)}>Inicio</button>
                <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('Exposition', e)}>Tienda</button>
            </React.Fragment>
        );
        
        if (this.props.page === 'About') {
            headerMenu = (
                <React.Fragment>
                    <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('About', e)} disabled>Inicio</button>
                    <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('Exposition', e)}>Tienda</button>
                </React.Fragment>
            );
        }
        else if (this.props.page === 'Exposition') {
            headerMenu = (
                <React.Fragment>
                    <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('About', e)}>Inicio</button>
                    <button className="header-btn header-menu-btn" onClick={e => this.props.changePage('Exposition', e)} disabled>Tienda</button>
                </React.Fragment>
            );
        }

        return (
            <header class="header">
                <nav class="header-content">
                    <div class="header-logo">
                        <a>GINO</a>
                        <small>{ this.props.isAdminLogged ? 'Administrador' : '' }</small>
                    </div>
                    
                    <div class="header-menu">
                        {headerMenu}
                    </div>

                    {
                        this.props.isAdminLogged && 
                        (
                            <div class="header-opt">
                                <button class="header-btn header-close-btn" onClick={this.closeSession}>Cerrar Sesión</button>
                            </div>
                        )
                    }
                    
                </nav>
            </header>
        );
    }
}