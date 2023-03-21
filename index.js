const express = require('express');
const app = express();
require('./db/db');

// dependencies
const port = process.env.PORT || 5000;
const post = require('./Routers/post');

// middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); 

app.use('api/upload',post);

// listening
app.listen(port,()=>{
   console.log(`listening at port ${port}`);
})