const express = require('express');
const router = express.Router();
const {home, UserHome} = require('../controllers/homeController');
const { profile } = require('../controllers/userController');

router.get('/',UserHome)
router.get('/profile', profile);


module.exports = router;