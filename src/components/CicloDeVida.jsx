import { useEffect } from "react"

const CicloDeVida = ({contador}) => {
    const mouseMove = ({x, y})=>{
        console.log(x, y)
    }



    useEffect(()=>{
        console.log('Yo me ejecuto cuando el componente ya se monto')
    },[])

    useEffect(()=>{
        console.log('Yo me ejecuto cuando el componente se esta actualizando')
    },[contador])
    console.log('Yo me ejecuto antes del monteje')

    useEffect(()=>{
        window.addEventListener('mousemove', mouseMove);
    }, [])
  return (
    <div>CicloDeVida</div>
  )
}

export default CicloDeVida