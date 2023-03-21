const router = require('express').Router();
const farmerPosts = require('../Models/farmerPosts');

router.post('/:id/:state',async(req,res)=>{
    const responce = await new farmerPosts({
       text:req.body.text,
       uid:req.params.id,
       state:req.params.state
    })
    await responce.save();
    res.send("Post send Sucessfully.......");
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