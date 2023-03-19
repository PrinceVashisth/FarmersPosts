const router = require('express').Router();
const farmerPosts = require('../Models/farmerPosts');
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dnkd8ncit', 
    api_key: '835945934675339', 
    api_secret: '5do_h8B7dXj-M3pqQPNu6VYaPnU',
    secure: true
});

// create a post
router.post('/:id/:state',async(req,res)=>{
    const file = req.files.img;
    const respo = await cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
          return result;
    }) 
    const responce = await new farmerPosts({
       img:respo.url,
       text:req.body.text,
       uid:req.params.id,
       state:req.params.state
    })
    await responce.save();
    res.send("Post send Sucessfully.......");
});

// get all posts with same state
router.get('/getData',async(req,res)=>{
    const responce =  await farmerPosts.find({
        state:req.body.state
    });
    res.send(responce); 
});

module.exports = router;