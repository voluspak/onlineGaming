import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading"

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const [prodCat, setProdCat] = useState([])
    const [loading, setLoading] = useState(true)
    const {category} = useParams()


    const getProducts = fetch('https://fakestoreapi.com/products')

    useEffect(()=>{
        getProducts
            .then(res=>res.json())
            .then((response)=>{
                setLoading(false)
                setProducts(response)
            })
            .catch((error)=>console.error(error))
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    useEffect(()=>{
        const noEspacios = category?.includes("%20") ? category.replace("%20"," ") : category
        const filterProd = products.filter((product)=> product.category === noEspacios)
        setProdCat(filterProd)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    return(
        <div className="bienvenida">
            {loading === true 
            ? <Loading/>
            : <ItemList productos={category? prodCat : products}/>}
        </div>
    )

    

}

export default ItemListContainer;