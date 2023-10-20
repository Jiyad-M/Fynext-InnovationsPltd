const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const surRoute = require('./routes/surRoute');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         
      }).then(()=>{
    console.log('mongodb connected...');}).catch((err)=>{
        console.log('mongodb not connected!',err);
 });


app.use('/', surRoute);


const port = 5000; 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
