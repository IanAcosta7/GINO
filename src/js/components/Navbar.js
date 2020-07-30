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
        return (
            <header class="header">
                <nav class="header-content">
                    <div class="header-logo">
                        <a>GINO</a>
                        <small>{ this.props.isAdminLogged ? 'Administrador' : '' }</small>
                    </div>
                    
                    <div class="header-menu">
                        <button class="header-btn header-menu-btn" disabled>Inicio</button>
                        <button class="header-btn header-menu-btn">Tienda</button>
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