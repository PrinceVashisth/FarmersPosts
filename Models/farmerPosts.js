// const express = require('express');
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    text:{
        type:String,
        require:true
    },
    uid:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    }
})

module.exports = new mongoose.model('Post',PostSchema);