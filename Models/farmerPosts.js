// const express = require('express');
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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
    },
    name:{
        type:String,
        require:true
    }
},{timestamps:true});

module.exports = new mongoose.model('post',PostSchema);