import "./burguerMenu.css"

const MenuHamburguesa = ({opcion}) =>{
    switch (opcion) {
        case "categoria":
            return(
                <div className="dropdown">
                    <button className="dropbtn">Categorias</button>
                    <div className="dropdown-content">
                        <a href="#">Accion</a>
                        <a href="#">Aventura</a>
                        <a href="#">Carreras</a>
                        <a href="#">Construcción</a>
                        <a href="#">Deportes</a>
                        <a href="#">Estrategia</a>
                        <a href="#">Shooter</a>
                        <a href="#">Guerra</a>
                        <a href="#">Lucha</a>
                    </div>
                </div>
            )
            break;
    
        case "requisitos":
            return(
                <div className="dropdown">
                    <button className="dropbtn">Categorias</button>
                    <div className="dropdown-content">
                        <a href="#">Bajos</a>
                        <a href="#">Intermedios</a>
                        <a href="#">Altos</a>
                    </div>
                </div>
            )
            break;
    }
}

export default MenuHamburguesa;