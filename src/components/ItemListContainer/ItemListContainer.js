import "./itemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect,  useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);
    const [prodCat, setProdCat] = useState([])
    const {category} = useParams()


    const getProducts = fetch('https://fakestoreapi.com/products')

    useEffect(()=>{
        getProducts
            .then(res=>res.json())
            .then((response)=>setProducts(response))
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
            <ItemCount />
            <ItemList productos={category? prodCat : products}/>
            <ItemDetailContainer/>
        </div>
    )

    

}

export default ItemListContainer;