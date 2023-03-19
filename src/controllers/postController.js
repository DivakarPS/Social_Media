const express = require('express');
const Post = require('../models/post');
const Comment = require('../models/comment');

const create = async (req, res) => {
    if(!req.isAuthenticated())
    return res.redirect('back');
    const response = await Post.create({
        content: req.body.content,
        user: req.user._id
    });
    req.flash('success','Post Published!');
    // console.log(response);
    return res.redirect('/');
}

const destroy = async(req, res) => {
    const post = await Post.findById(req.params.id);
    // console.log(req.params);
    // console.log("the post is:",post);
    // .id gives the string of objectId
    if(post && post.user == req.user.id){
        await Post.findByIdAndDelete(req.params.id);
        Comment.deleteMany({post: req.params.id});
        req.flash('success','Post and associated comments Deleted!');
    }
    return res.redirect('back');
}

module.exports = {
    create,
    destroy
}