import { useState } from "react"
import { CartContext } from "./cartContext"

const CartProvider = ({children}) => {
  let [cart, setCart] = useState([])

  const addToCart = (item, quantity) =>{
    const newProd = {
      name: item.title,
      price: item.price,
      category: item.category,
      quantity: quantity
    }
    setCart([...cart, newProd])
  }

    return (
    <CartContext.Provider value={{addToCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider