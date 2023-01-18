import React from 'react'

const ItemDetail = ({detail}) => {
  return (
    
    <div className="card" key={detail.id}>
        <div className="imgContainer">
            <img alt={detail.title} src={detail.img}/>
        </div>
        <div className="bodyCard">
            <h5 className="title">{detail.title}</h5>
            <p className="category">Categoria: {detail.category}</p>                
            <p className="description">{detail.description}</p>
            <p className="launchment">Lanzamiento: {detail.launchment}</p>
        </div>
    </div>

  )
}

export default ItemDetail