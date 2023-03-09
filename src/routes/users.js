const express = require('express');
const router = express.Router();
const {home, UserHome} = require('../controllers/homeController');
const { profile, signUp, signIn, create, createSession } = require('../controllers/userController');

router.get('/',UserHome)
router.get('/profile', profile);
router.get('/sign-in', signIn);
router.get('/sign-up', signUp);
router.post('/create', create);
router.post('/create-session', createSession);

module.exports = router;