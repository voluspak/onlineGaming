import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [pay, setPay] = useState(0)
    

    useEffect(()=>{
        let itemsTotalCost = 0
        cart.forEach((prod)=>{
            itemsTotalCost += prod.price*prod.quantity
        })
        setPay(itemsTotalCost.toFixed(2))
        setTotal(cart.reduce((prev,act)=>prev+act.quantity,0))
    },[cart])

  return (
    <div>
        <div className="cardContainer">
            {cart.map((item)=>(
                <div className="card" key={item.id}>
                    <div className="imgContainer">
                        <img alt={item.name} src={item.img}/>
                    </div>
                    <div className="bodyCard">
                        <h3 className="title">Articulo: {item.name}</h3>
                        <span className="description">Cantidad: {item.quantity}</span>
                        <span className="price">Unid. ${item.price}</span>
                        <div className="lowerBodyCard">                  
                            <span className="price">Total ${item.price*item.quantity}</span>
                            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="cartFooter">
                <div>
                    <span>Productos: {total}</span>
                    <span>Total a PAGAR: ${pay}</span>
                </div>
                <div className="buttonsContainer">
                    <button onClick={()=> clear()}>Vaciar</button>
                    <button>Comprar</button>
                </div>
        </div>
    </div>
  )
}

export default Cart