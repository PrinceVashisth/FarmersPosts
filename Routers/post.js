const router = require('express').Router();
const farmerPosts = require('../Models/farmerPosts');

router.post("/",async(req,res)=>{
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
router.get('/:state',async(req,res)=>{
    try {
        const respo =  await farmerPosts.find({state:req.params.state});
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

// Delete Single Post
router.delete('/:id',async(req,res)=>{
   try {
     const Post = await farmerPosts.findByIdAndDelete(req.params.id);
     if(Post)
       res.send('Post Deleted Sucessfully...');
     res.send("wrong id of Post");   
   } catch (error) {
    console.log(error);
   }
});

// Delete Multiple Posts
router.delete('/deleteAll/:id',async(req,res)=>{
    try {
      const Posts = await farmerPosts.deleteMany({uid:req.params.id});
      if(Posts)
         res.send("Posts Deleted Sucessfully........");
         res.send("Posts Not Deleted Because of Wrong User Id.........");
    } catch (error) {
     console.log(error);
    }
 });
 

module.exports = router;