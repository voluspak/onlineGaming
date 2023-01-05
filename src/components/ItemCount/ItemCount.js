import "./itemCount.css"
import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    let stock = 5;
    const sumar = () =>{
        if(contador === stock){
            return
    }else{
        setContador(contador + 1);
    }
    }
    const restar = () =>{
        if(contador < 2 ){
           return
        }else{
        setContador(contador - 1);
        }
    }
  return (
    <div className='counter'>
        <div className='controller'>
            <button onClick={restar} id="menos">-</button>
            <div>
                <span>{contador}</span>
            </div>
            <button onClick={sumar} id="mas">+</button>
        </div>
        <div>
            <button>Agregar al carrito</button>
        </div>

    </div>
  )
}

export default ItemCount