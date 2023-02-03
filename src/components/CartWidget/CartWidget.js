import { CartContext } from "../../context/cartContext"
import { useContext, useEffect, useState } from "react"
import "./CartWidget.css"
const Carrito = () =>{
    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setTotal(cart.reduce((prev,act)=>prev+act.quantity,0))
    },[cart])
    
    return(
        <div className="carritoBotonContainer">
            <button className="imgCart">
            🛒
                {total>0 &&
                    <div className="contadorContainer ">
                        <span className="contador">
                            {total}
                        </span>
                    </div>
                }
            </button>
        </div>
    )
}

export default Carrito;