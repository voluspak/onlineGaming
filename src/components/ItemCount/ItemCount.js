import "./itemCount.css"

const ItemCount = ({contador, setContador, stock}) => {
    const onAdd = () =>{
        if(contador === stock){
            return
        }else{
        return setContador(contador + 1);
        }
    }
    const restar = () =>{
        if(contador < 2 ){
           return
        }
        setContador(contador - 1);
        
    }
    const inputContador = (event) =>{
        setContador([event.target.value])
    }
  return (
    <div className='counter'>
        <div className='controller'>
            <button onClick={restar} id="menos">-</button>
            <div>
                <input className="numberInput" type="number" value={contador} min="1" max={stock} onChange={inputContador}/>
            </div>
            <button onClick={onAdd} id="mas">+</button>
        </div>
    </div>
  )
}

export default ItemCount