import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"
import { collection, getFirestore, getDocs, where, query} from "firebase/firestore"

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()


    const getProducts = ()=>{
        const dataBase = getFirestore()
        const queryBase = collection(dataBase, "videojuegos")
        const querySnapshot = category
            ? query(queryBase, where("category", "==", category)) 
            : queryBase
 
        getDocs(querySnapshot)
            .then((response)=>{
                const data = response.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setLoading(false)
                setProducts(data)
            })
                .catch(error=>console.log(error))
    }
    

    useEffect(()=>{
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    useEffect(()=>{
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return(
        <div className="bienvenida">
            {loading === true 
            ? <Loading/>
            : <ItemList productos={products}/>}
        </div>
    )

    

}

export default ItemListContainer;