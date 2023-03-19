const Comment = require('../models/comment');
const Post = require('../models/post');

const create = async (req, res) => {
    const response = await Comment.create({
        content:req.body.content,
        user: req.user._id,
        post: req.body.post
    });
    // console.log(req.body);
    const post = await Post.findById(req.body.post);
    
    // console.log(post," is the post");
    if(post){
        post.comments.push(response);
        req.flash('success','Added Comment');
        post.save();
    }
    return res.redirect('back');
}


const destroy = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    if(comment.user == req.user.id){
        const postId = comment.post;
        await Comment.findByIdAndDelete(req.params.id);

        await Post.findByIdAndUpdate(postId,{$pull : {comments:req.params.id}});
        req.flash('success','Removed Comment');
    }
    return res.redirect('back');
}

module.exports = {
    create,
    destroy
}