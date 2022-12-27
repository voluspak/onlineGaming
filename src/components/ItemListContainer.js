import "./estilos/itemListContainer.css"

const ItemListContainer = ({cart})=>{
    if(cart == 0){
        return(
            <div className="bienvenida">
                <h1>¡Bienvenido a Online Gaming!</h1>
                <h2>La plataforma para descargar tus videojuegos favoritos</h2>
            </div>
        )
    }else{
        return(
            <div className="bienvenida">
                <h1>¡Bienvenido a Online Gaming!</h1>
                <h2>Ya tienes un item en el carrito</h2>
            </div>
        )
    }
    

}

export default ItemListContainer;