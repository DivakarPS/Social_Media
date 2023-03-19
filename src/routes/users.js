const express = require('express');
const router = express.Router();
const {home, UserHome} = require('../controllers/homeController');
const { profile, signUp, signIn, create, createSession, logout } = require('../controllers/userController');
const passport = require('../config/passport_local_strategy');


router.get('/',UserHome)
router.get('/profile', passport.checkAuthentication ,profile);
router.get('/sign-in', signIn);
router.get('/sign-up', signUp);
router.post('/create', create);
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
), createSession);
router.get('/logout', logout);

module.exports = router;