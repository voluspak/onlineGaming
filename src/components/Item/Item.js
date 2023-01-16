import "./item.css"

const Item = ({articulos}) => {
  return (
    <>
        {
            articulos.map((item)=>(
                <div className="card" key={item.id}>
                    <div className="imgContainer">
                        <img alt={item.title} src={item.img}/>
                    </div>
                    <div className="bodyCard">
                        <h5 className="title">{item.title}</h5>
                        <p className="category">Categoria: {item.category}</p>                
                        <p className="description">{item.description}</p>
                        <p className="launchment">Lanzamiento: {item.launchment}</p>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Item