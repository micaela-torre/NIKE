import React from 'react';

const Card =(props)=> {
  const{products} = props
  console.log(products)
  return(
    <>
       {products.map((product, index)=>
          <div key={`product:${index}`} className='card'>
            <div style={{backgroundImage:`url("${product.photo}")`}} className='productImage'></div>
            <p className='productDescription'>{product.name}</p>
            <p>${product.price}</p>
            <button className='buyButton'>Agregar al carrito</button>
          </div>
        )}
    </>
  )
}

export default Card;
