import Item from "../Item/Item"
import "./itemList.css"

const ItemList = ({productos}) => {
  return (
    <div className="cardsContainer">
    <Item articulos={productos}/>
    </div>
  )
}

export default ItemList