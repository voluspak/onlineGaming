import logo from "./assets/og-logo-alt.png"
import "./estilos/navBar.css"
import MenuHabmurgusa from "./BurguerMenu"
import Carrito from "./CartWidget"

const NavBar = () =>{
    const opcionA = "categoria";
    const opcionB = "requisitos";
    return(
        <nav className="navBar">
            <div className="logoContainer">
                <img src={logo} className="logo"/>
            </div>
            <div className="navBarMenuContainer">
                <ul className="navBarMenu">
                    <li><a href="#">Incio</a></li>
                    <li><MenuHabmurgusa opcion={opcionA}/></li>
                    <li><MenuHabmurgusa opcion={opcionB}/></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
            </div>
            <Carrito/>
        </nav>
    )
}

export default NavBar