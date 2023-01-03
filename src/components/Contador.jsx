import { useState } from "react"
import CicloDeVida from "./CicloDeVida";

function Contador() {
    const [contador, setContador] = useState(0);
  return (
    <>
    <CicloDeVida contador={contador}/>    
    <h1>Contador</h1>
    <h2>{contador}</h2>
    <button onClick={()=> setContador(contador + 1)}>Suma wachin</button>
    </>
  )
}

export default Contador