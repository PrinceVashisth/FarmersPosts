const router = require('express').Router();
const farmerPosts = require('../Models/farmerPosts');

router.post("/:id/:state/:text",async(req,res)=>{
    try {
        const responce = await new farmerPosts({ 
           text:req.body.text,
           uid:req.body.id,
           state:req.body.state
        })
        await responce.save();
        res.send("Post send Sucessfully.......");
        
    } catch (error) {
        console.log("error"+error);
    }
});

// all state post
router.get('/getuser',async(req,res)=>{
    try {
        const respo =  await farmerPosts.find({state:req.body.state});
        res.send(respo);
    } catch (error) {
        res.send(error);
    }
});

// all users posts
router.get('/userposts/:id',async(req,res)=>{
    try {
        const respo =  await farmerPosts.find({uid:req.params.id});
        res.send(respo);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;