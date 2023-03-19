const express = require('express');
const app = express();
require('./db/db');

// dependencies
const fileupload = require('express-fileupload');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const post = require('./Routers/post');

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); 
app.use(fileupload({
    useTempFiles:true
}))
app.use('/api/upload',post);

// listening
app.listen(port,()=>{
   console.log(`listening at port ${port}`);
})