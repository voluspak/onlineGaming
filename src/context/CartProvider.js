import { useState } from "react"
import { cartContext } from "./cartContext"

const CartProvider = ({children}) => {
  const {cart, setCart} = useState()

  const addToCart = (item, quantity) =>{
  const newProd = {
    title: item.title,
    price: item.price,
    category: item.category,
    quantity: quantity
  }
  console.log(newProd)
  setCart([...cart, newProd])

    }

//   const deleteItem = () =>{

//   }
//   const clearCart = () => setCart([])

    return (
    <cartContext.Provider value={{addToCart}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider