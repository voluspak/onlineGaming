import "./navBar.css"
import MenuHabmurgusa from "../BurguerMenu/BurguerMenu"
import Carrito from "../CartWidget/CartWidget"

const NavBar = () =>{
    const opcionA = "categoria";
    const opcionB = "requisitos";
    return(
        <nav className="navBar">
            <div className="logoContainer">
                <img src="./assets/1.png" className="logo"/>
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