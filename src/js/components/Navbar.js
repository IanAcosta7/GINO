export default class Navbar extends React.Component {
    closeSession() {
        document.cookie = `jwt=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }

    render() {
        return (
            <header class="header">
                <div class="header-content">
                    <div class="header-logo">
                        <a>GINO</a>
                        <small>{ this.props.isAdminLogged ? 'Administrador' : '' }</small>
                    </div>
                    
                    <div class="header-menu">
                        <button class="header-btn header-menu-btn" disabled>Inicio</button>
                        <button class="header-btn header-menu-btn">Tienda</button>
                    </div>

                    <div class="header-opt">
                        <button class="header-btn header-close-btn" onClick={this.closeSession}>Cerrar Sesión</button>
                    </div>
                </div>
            </header>
        );
    }
}