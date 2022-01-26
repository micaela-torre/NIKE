import React, {useContext} from 'react';
import { DataContext } from '../context/DataContext';

const Card =()=> {
  const {products} = useContext(DataContext);
 
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
