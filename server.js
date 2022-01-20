const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
require("./config/database")
app.use(express.json())
app.use(cors())



app.listen("4000", console.log("server in port"))