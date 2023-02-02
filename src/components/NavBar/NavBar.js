import "./navBar.css"
import Carrito from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="navBar">
            <NavLink className="logoContainer" to="/">
                <img src="./assets/1.png" className="logo" alt="Logo"/>
            </NavLink>
            <div className="navBarMenuContainer">
                <ul className="navBarMenu">
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/">
                    Incio
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/accion">
                    Accion
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/aventura">
                    Aventura
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/carreras">
                    Carreras
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/estrategia">
                    Estrategia
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/lucha">
                    Lucha
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/shooter">
                    Shooter
                    </NavLink></li>
                </ul>
            </div>
            <Link to="/cart">
                <Carrito/>
            </Link>
            
        </nav>
    )
}

export default NavBar