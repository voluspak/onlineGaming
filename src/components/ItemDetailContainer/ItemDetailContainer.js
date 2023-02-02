import "../Item/item.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const {id} = useParams()

  // const getProduct = fetch(`https://fakestoreapi.com/products/${id}`)
  const getProduct = () =>{
    const dataBase = getFirestore()
    const querySnapshot = doc(dataBase, "videojuegos", id)
    getDoc(querySnapshot)
      .then((response)=>{
        setLoading(false)
        setSingleProduct({id: response.id, ...response.data()})
      })
      .catch(error=>console.log(error))

  }

  useEffect(()=>{
    getProduct()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  return (
    <>
        {
        loading === true
          ? <Loading/>
          : <ItemDetail detail={singleProduct}/>
        }
        
    </>
  )
}

export default ItemDetailContainer