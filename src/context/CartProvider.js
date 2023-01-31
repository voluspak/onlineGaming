import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    let prodID = item.id
    console.log(prodID)
    let existe = cart.some((prod) => prod.id === prodID);
    console.log(existe)
    if (existe) {
      let carrito = cart.find((prod)=> prod.id === prodID ? prod.quantity += quantity : prod.quantity)
      setCart([carrito])
    } else {
      const newProd = {
        id: item.id,
        name: item.title,
        price: item.price,
        category: item.category,
        quantity: quantity,
      };
      setCart([...cart, newProd]);
    }
    console.log(cart)
  };

  const clear = () => setCart([]);

  const removeItem = (id) => {
    let prodID = id;
    let newCart = cart.filter((item) => item.id !== prodID);
    setCart([...newCart]);
  };

  return (
    <CartContext.Provider value={{ addToCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
