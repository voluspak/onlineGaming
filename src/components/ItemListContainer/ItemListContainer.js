import "./itemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect,  useState } from "react"

const ItemListContainer = ()=>{
    const [products, setProducts] = useState([]);



    const getProducts = fetch('https://fakestoreapi.com/products')

    useEffect(()=>{
        getProducts
            .then(res=>res.json())
            .then((response)=>setProducts(response))
            .catch((error)=>console.error(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ])

    return(
        <div className="bienvenida">
            <ItemCount />
            <ItemList productos={products}/>
            <ItemDetailContainer />
        </div>
    )

    

}

export default ItemListContainer;