import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='flex gap-5'>
        {product.title} {"->"} {product.price}
    </div>
  )
}

export default ProductCard