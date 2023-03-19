const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
      usernameField: 'email'
    },
    async function(email, password, done){
        const user = await User.findOne({email: email});
        if(!user|| user.password != password){
            console.log('Invalid username or password');
            return done(null, false);
        }
        return done(null, user);
    }
));

passport.serializeUser(function(user,done){
    return done(null, user.id);
});

passport.deserializeUser(async function(id, done){
    const user = await User.findById(id);
    if(!user){
        console.log('Error in finding user');
        return done(null, false);
    }
    return done(null, user);
});

passport.checkAuthentication = function(req, res, next){
    // isAuthenticated is set by passport to the request to check if the current user is authenticated
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        console.log(req.user);
        res.locals.user = req.user;
        // user is not present in the request and not getting assigned?!
        //  console.log(req.user);
        // if you can come up with something just ping me
        // ok i will try! THank you
    }
    // req.user has the current signed in user
    //req.user is set by passport but not sent into the response
    next();
}

module.exports = passport;