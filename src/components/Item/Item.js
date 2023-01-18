import "./item.css"

const Item = ({articulos}) => {
  return (
    <>
        <div className="card">
            <div className="imgContainer">
                <img alt={articulos.title} src={articulos.image}/>
            </div>
            <div className="bodyCard">
                <h3 className="title">{articulos.title}</h3>
                <p className="description">{articulos.description}</p>
                <div className="lowerBodyCard">  
                  <p className="category">{articulos.category}</p>                
                  <span className="price">${articulos.price}</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Item