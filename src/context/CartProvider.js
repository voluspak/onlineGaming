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

  const clear =()=> setCart([])
  
  const removeItem = (id) =>{
    let prodID = id;
    let newCart = cart.filter(item=> item.id !== prodID)
    setCart([...newCart])
  }

  return (
    <CartContext.Provider value={{addToCart, clear, removeItem}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider