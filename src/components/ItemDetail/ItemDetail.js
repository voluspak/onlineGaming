import "./itemDetail.css"

const ItemDetail = ({detail}) => {
  return (
    <div className="card detailCard"  key={detail.id}>
                  <div className="imgContainer">
                <img alt={detail.title} src={detail.image}/>
            </div>
            <div className="bodyCard">
                <h3 className="title">{detail.title}</h3>
                <p className="description">{detail.description}</p>
                <div className="lowerBodyCard">  
                  <h4 className="category">{detail.category}</h4>                
                  <span className="price">${detail.price}</span>
                </div>
            </div>
    </div>
  )
}

export default ItemDetail