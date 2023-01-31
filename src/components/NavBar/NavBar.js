import "./navBar.css"
import Carrito from "../CartWidget/CartWidget"
import { NavLink } from "react-router-dom"

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
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/men's clothing">
                    Hombre
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/women's clothing">
                    Mujer
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/jewelery">
                    Joyeria
                    </NavLink></li>
                    <li><NavLink className={({isActive})=> isActive? "active":"inactive"} to="/category/electronics">
                    Electronica
                    </NavLink></li>
                </ul>
            </div>
            <Carrito/>
        </nav>
    )
}

export default NavBar