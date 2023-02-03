import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import "./Cart.css"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import Modal from "../../components/Modal/Modal"

const Cart = () => {
    const { cart, removeItem, clear} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [pay, setPay] = useState(0)
    const [order, setOrder] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: "",
        phone: "",
        email: ""
    })
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
   
    const createOrder = (event) =>{
        event.preventDefault()
        const querySnapshot = collection(dataBase, "orders")

        const currentOrder =  {...order, buyer: formValue} 
  
        addDoc(querySnapshot, currentOrder)
            .then(resp=>{
                console.log(resp.id)
                updateStock()
                alert(`¡Orden creada con éxito! \n El código de su compra es ${resp.id}`)})
            .catch(error => console.log(error))
        setShowModal(false)
        clear()
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

    const inputHandle = (event) =>{
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

  return (
    <div className="cartContainer">
        <div className="cartCardContainer">
            {cart.map((item)=>(
                <div className="cartCard" key={item.id}>
                    <div className="cartImgContainer">
                        <img alt={item.name} src={item.img}/>
                    </div>
                    <div className="cartBodyCard">
                        <span>
                            <span className="cartArt">Articulo: </span> <br/> 
                            {item.name}
                        </span>
                        <span>
                            <span className="cartCant">Cantidad: </span><br/>
                            {item.quantity}
                        </span>
                        <span > 
                            <span className="cartUnid">Unid.</span> <br/>
                            ${item.price}
                        </span>                 
                            <span>
                                <span className="cartTotalIt">Total </span> <br/>
                                ${item.price*item.quantity}
                            </span>
                            <button className="cartRemoveButton" onClick={()=>removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="cartSelector">
            <div className="mountsDisplay">
                <span >Productos: {total}</span>
                <span >Total a PAGAR: <span className="cartItems"> ${pay}</span> </span>
            </div>
            <div className="buttonsContainer">
                <button className="cartRemoveButton" onClick={()=> clear()}>Vaciar</button>
                <button className="cartContinueButton" onClick={()=> setShowModal(true)}>Continuar</button>
            </div>
        </div>
        <Modal show={showModal} set={setShowModal}>
            <h4>Vamos a necesitar un par de datos para registrar la compra...</h4>
            <form className="form">
                <input type="text" name="name" onChange={inputHandle} value={formValue.name} placeholder="Nombre"/>
                <input type="number" name="phone" onChange={inputHandle} value={formValue.phone} placeholder="Teléfono"/>
                <input type="email" name="email" onChange={inputHandle} value={formValue.email} placeholder="Correo Electrónico"/>
                <button className="cartContinueButton" onClick={createOrder}>Comprar</button>
            </form>
        </Modal>
    </div>
  )
}

export default Cart