import "./itemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ()=>{
    return(
        <div className="bienvenida">
            <h1>¡Bienvenido a Online Gaming!</h1>
            <h2>La plataforma para descargar tus videojuegos favoritos</h2>
            <ItemCount />
        </div>
    )

    

}

export default ItemListContainer;