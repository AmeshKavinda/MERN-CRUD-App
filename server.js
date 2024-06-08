const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyparser.json());


//route middleware
app.use(postRoutes);


const PORT = 8000;

const DB_URL = 'mongodb+srv://twg:twg123@mernapp.org4aa1.mongodb.net/?retryWrites=true&w=majority&appName=mernApp'

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});