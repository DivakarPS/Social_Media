const User = require('../models/user');
const { UserHome } = require('./homeController');

const profile = async(req, res) => {
     
    // if(req.cookies.user_id){
    //     const user = await User.findById(req.cookies.user_id);
    //     if(user){
            return res.render('profile',{
                // user: user,
                title: 'User-Profile',
                body: 'Codeial | User Profile'
            });
    //     }
    //     else
    //     return res.redirect('/users/sign-in');
    // }
    // else{
    //     return res.redirect('/users/sign-in');
    // }
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
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    const user = await User.findOne({email: req.body.email});
    if(!user){
        const response = await User.create(req.body);
        console.log(response);
        return res.redirect('/users/sign-in');
    } 
    return res.redirect('/users/sign-in');

}

const createSession = async (req, res) => {
    // const user = await User.findOne({email: req.body.email});
    // // console.log(user);
    // if(!user)
    // return res.redirect('back');

    // if(user.password!=req.body.password)
    // return res.redirect('back');

    // res.cookie('user_id',user.id);
    // console.log(res.cookie);
    return res.redirect('/');
}

const logout = async (req, res, next) => {
    // req.logout();
    // return res.redirect('/');
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });

}

module.exports = {
    profile,
    signIn,
    signUp,
    create,
    createSession,
    logout
}