
const Product = require("../models/Product")

const productsControllers = {
 getProducts: async(req,res)=>{
    try{
        let products = await Product.find()
        if(products.length){
            res.json({success:true , response: products })
        } else{
            throw new Error("Products not Found")
        }
    }catch(err){
        res.json({success:false , response: err });
        console.log(err)
    }
 },
 addProduct: async(req,res)=>{
     try{
         const{name, photo,description,price} = req.body
         const newProduct = new Product({
            name,
            photo,
            description,
            price
         })
        newProduct.save()
        res.json({success:true , response: newProduct})
     }catch(err){
        res.json({success:false , response: err });
        console.log(err)
     }
 }
 
}

module.exports = productsControllers