const Post  = require('../models/post');
const home = async (req, res) => {
    const posts = await Post.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    });
    return res.render('home',{
        title: "HOME",
        posts: posts
    });
}

const UserHome = async (req, res) => {
    return res.render('home',{
        title: 'User-Home'
    });
}

module.exports = {
    home,
    UserHome
}