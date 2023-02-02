import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import "./Cart.css"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"

const Cart = () => {
    const { cart, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [pay, setPay] = useState(0)
    const [order, setOrder] = useState({})
    const dataBase = getFirestore()

    
    useEffect(()=>
    setOrder({
        buyer:{
            name: "Alejandro Cardona",
            phone: "555999",
            email: "prueba@prueba.com"
        },
        items: cart.map((prod)=>{
            const { name, price, id} =prod
            return{ name, price, id}
        }),
        total: cart.reduce((prev, act)=>prev + (act.price*act.quantity),0)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ,[])
    useEffect(()=>{
        let itemsTotalCost = 0
        cart.forEach((prod)=>{
            itemsTotalCost += prod.price*prod.quantity
        })
        setPay(itemsTotalCost.toFixed(2))
        setTotal(cart.reduce((prev,act)=>prev+act.quantity,0))
    },[cart])
   
    const createOrder = () =>{
        const querySnapshot = collection(dataBase, "orders")

  
        addDoc(querySnapshot, order)
            .then(resp=>{
                console.log(resp.id)
                updateStock()
                alert("¡Orden creada con éxito!")})
            .catch(error => console.log(error))
    }

    const updateStock = () =>{
        cart.forEach((item)=>{
            const {stock, quantity} = item
            const querySnapshot = doc(dataBase, "videojuegos", item.id)
            updateDoc(querySnapshot, {stock: stock - quantity})
                .then(()=>console.log("el producto actualizo su stock"))
                .catch(err=>console.log(err))
        })
    }

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
                    <button onClick={()=> createOrder()}>Comprar</button>
                </div>
        </div>
    </div>
  )
}

export default Cart