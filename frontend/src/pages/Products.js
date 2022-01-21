import React from 'react';
import Card from '../components/Card';
import Nav from '../components/Nav';

const Products=()=>{
    const products= [
        {name: "Nike Air Zoom Pegasus 38", photo:"https://i.postimg.cc/R0GvXc0H/air-zoom-pegasus-38-mens-road-running-shoes-lq7-PZZ.jpg" , description:"Men's Road Running Shoes", price:120},
        {name: "Nike Air Zoom Pegasus 38", photo:"https://i.postimg.cc/R0GvXc0H/air-zoom-pegasus-38-mens-road-running-shoes-lq7-PZZ.jpg" , description:"Men's Road Running Shoes", price:120},
        {name: "Nike Air Zoom Pegasus 38", photo:"https://i.postimg.cc/R0GvXc0H/air-zoom-pegasus-38-mens-road-running-shoes-lq7-PZZ.jpg" , description:"Men's Road Running Shoes", price:120}
    ]
  return (
      <div className='productsContainer'>
          <div className='cardsContainer'>
              <div className='navHome'>
              <div className='logoContainer'></div>
                <Nav/>
                <input type='text' placeholder='Search'/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              </div>
              <div className='cards'>
                  <Card products={products}/>
              </div>
          </div>
      </div>
  )
}

export default Products;