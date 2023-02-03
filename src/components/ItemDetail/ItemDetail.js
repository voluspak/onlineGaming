import "./itemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemDetail = ({detail}) => {
  const { addToCart } = useContext(CartContext)
  const [contador, setContador] = useState(1);
  return (
    <div className="card detailCard"  key={detail.id}>
      <div className="imgContainer">
        <img alt={detail.title} src={detail.img}/>
      </div>
      <div className="bodyCard">
        <h3 className="title">{detail.title}</h3>
        <p className="description">{detail.description}</p>
        <div className="lowerBodyCard">               
          <span className="price">${detail.price}</span>
          <br/>
            <span className="stockDetail">(Stock: {detail.stock})</span>
        </div>
      </div>
      <ItemCount contador={contador} setContador={setContador} stock={detail.stock}/>
        <div>
          <button className="addButton" onClick={()=>addToCart(detail, contador)} disabled={contador>detail.stock}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail