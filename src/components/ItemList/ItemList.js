import Item from "../Item/Item"
import "./itemList.css"
import { Link } from "react-router-dom"

const ItemList = ({productos}) => {
  return (
    <div className="cardsContainer">
      {productos.map((prod)=>(  
        <Link key={prod.id} to={`item/${prod.id}`} >  
          <Item articulos={prod}/>
        </Link>
      ))}
    </div>
  )
    
}

export default ItemList