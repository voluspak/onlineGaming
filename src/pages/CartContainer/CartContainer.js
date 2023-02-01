import Cart from "../Cart/Cart"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const {cart} = useContext(CartContext)

  if(cart.length === 0){
    return(
        <div>
            <h2>¡No hay nada en tu carrito!</h2>
            <h4>Aun...</h4>
            <Link to="/">
                Vamos a cambiar eso 😉
            </Link>
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