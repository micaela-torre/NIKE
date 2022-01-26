import React,  {createContext, useEffect, useState} from 'react'
import axios from 'axios';
export const DataContext = createContext()


export const DataProvider = ({children}) => {
const [products, setProducts] = useState([]);
useEffect(()=>{
 const getProducts=async() => {
  try{
    let res = await axios.get("http://localhost:4000/api/products")
    setProducts(res.data.response)
  }catch(err){
     console.log(err)
  }
 }
 getProducts()
},[])

  return(
      <DataContext.Provider value={{products}}>
        {children}
      </DataContext.Provider>
  )
};


