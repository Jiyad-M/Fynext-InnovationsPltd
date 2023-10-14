const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv').config()

const app = express();




const port = 4000
app.listen(port,()=>{
    console.log(`server is running on post ${port}`)
})