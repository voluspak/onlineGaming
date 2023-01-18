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
                <h4 className="category">{articulos.category}</h4>                
                <p className="description">{articulos.description}</p>
                <span>${articulos.price}</span>
            </div>
        </div>
    </>
  )
}

export default Item