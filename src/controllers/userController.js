const User = require('../models/user');

const profile = async(req, res) => {
    return res.render('profile',{
        body : 'This is user profile page',
        title: 'User-Profile'
    });
}

const signUp = async(req, res) => {
    return res.render('user_sign_up',{
        title: 'User-SignUp'
    });
}

const signIn = async (req, res) => {
    return res.render('user_sign_in',{
        title: 'User-signIn'
    });
}


const create = async (req, res) => {
     console.log(req.body);
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    // User.findOne({email:req.body.email}, (err, user) => {
    //     if(err){
    //         console.log("error in creating user:",err);
    //         return;
    //     }
    //     if(!user){
    //         User.create(req.body, (err, user) => {
    //             if(err){
    //                 console.log("error in creating user:",err);
    //                 return; 
    //             }
    //             return res.redirect('/users/sign-in');
    //         })
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // });
    const user = User.findOne({email: req.body.email});
    if(!user){
        const res = User.create(req.body);
        return res.redirect('/users/sign-in');
    } 
            return res.redirect('/users/sign-in');

}

const createSession = async (req, res) => {

}

module.exports = {
    profile,
    signIn,
    signUp,
    create,

}