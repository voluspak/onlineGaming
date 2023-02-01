import "./itemCount.css"

const ItemCount = ({contador, setContador}) => {
    const onAdd = () =>{
        return setContador(contador + 1);
        
    }
    const restar = () =>{
        if(contador < 2 ){
           return
        }
        setContador(contador - 1);
        
    }
  return (
    <div className='counter'>
        <div className='controller'>
            <button onClick={restar} id="menos">-</button>
            <div>
                <span>{contador}</span>
            </div>
            <button onClick={onAdd} id="mas">+</button>
        </div>
    </div>
  )
}

export default ItemCount