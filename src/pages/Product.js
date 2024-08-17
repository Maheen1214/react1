import React from 'react'
import { product } from '../data/dataa'

const Product = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>Product page</h2>
      <div className='row'>
        {
            product.map((item, i)=>{
                return(
                    <div className='col-sm-6 col-md-4 col-lg-3' key={i}>
                        <div className='card'>
                        <img src = {item.image} />
                        <div className='card-body'>
                          <h5 className='card-title'>{item.title}</h5>
                          <p className='card-text'>{item.description}</p>
                          <a href="#" className='btn btn-danger'>Buy Now</a>
                        </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Product
