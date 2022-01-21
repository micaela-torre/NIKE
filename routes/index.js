const express = require("express")
const productsControllers = require("../controllers/productsController")
const router = express.Router()

router
.route("/products")
.get(productsControllers.getProducts)
.post(productsControllers.addProduct)






module.exports = router