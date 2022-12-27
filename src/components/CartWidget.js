import "./estilos/CartWidget.css"

const Carrito = () =>{
    return(
        <div className="carritoBotonContainer">
            <button className="imgCart">🛒<div className="contadorContainer"><span className="contador">1</span></div></button>
        </div>
    )
}

export default Carrito;