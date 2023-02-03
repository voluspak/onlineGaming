import Cart from "../Cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"
import "./cartContainer.css"

const CartContainer = () => {
    const {cart} = useContext(CartContext)

  if(cart.length === 0){
    return(
        <div className="emptyCartMessageContainer">
          <div className="emptyCartMessage">
            <h2>¡No hay nada en tu carrito!</h2>
            <h4>Aun...</h4>
            <p>
                <i>Haz click en el <u>emoji</u> y cambiemos eso</i> <Link to="/">😉</Link>
            </p>
          </div>
        </div>
    )
  }  
  return (
    <div>
        <Cart/>
    </div>
  )
}

export default CartContainer