import "./item.css"

const Item = ({articulos}) => {
  return (
    <>
        <div className="card">
            <div className="imgContainer">
                <img alt={articulos.title} src={articulos.img}/>
            </div>
            <div className="bodyCard">
                <h3 className="title">{articulos.title}</h3>
                <p className="description">{articulos.description}</p>
                <div className="lowerBodyCard">  
                  <p className="category">
                    <span>Categoria: </span>
                      {articulos.category.at(0).toUpperCase() + articulos.category.slice(1)}
                  </p>                
                  {articulos.price > 0 
                  ? (<span className="price">${articulos.price}</span>)
                  : (<span className="price">GRATIS</span>)}
                </div>
            </div>
        </div>
    </>
  )
}

export default Item