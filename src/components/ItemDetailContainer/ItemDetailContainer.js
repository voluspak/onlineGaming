import "../Item/item.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({})
  const {id} = useParams()

  const getProduct = fetch(`https://fakestoreapi.com/products/${id}`)

  useEffect(()=>{
    getProduct
    .then(res=>res.json())
    .then(response=>setSingleProduct(response))
    .catch(error=>console.log(error))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  return (
    <>
        <ItemDetail detail={singleProduct}/>
    </>
  )
}

export default ItemDetailContainer