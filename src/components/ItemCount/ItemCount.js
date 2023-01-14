import "./itemCount.css"
import { useState, useEffect } from "react"

const datos = [
    {id:1, name: "A", size: 32},
    {id:2, name: "B", size: 46},
    {id:3, name: "C", size: 34},
    {id:4, name: "D", size: 30},
    {id:5, name: "E", size: 42},
]

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    const [products, setProducts] = useState([]);
    let stock = 5;

    const getProducts = new Promise((resolve)=>{
        setTimeout(()=> resolve(datos), 2000)
    })
    useEffect(()=>{
        getProducts
        .then((response)=>{
            setProducts(response)
        })
        .catch((error)=> console.error(error))
    },[])


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
       <ul>
       {
            products.map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))
        }
       </ul>
        
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