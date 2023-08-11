import React from 'react'
import './Product.css';
const Product = (props) => {
  return (
    <div className='card'>
    <img
    className='product--image' src={props.url} alt ='product image'/>
   <h5>{props.name}</h5>
   <p className="price">{props.price}</p>
   <p>{props.description}</p>
   <p>
    <button>Add to Cart</button>
   </p>
  </div>
  )
}

export default Product