const express = require('express');
const router = express.Router();
const userRoutes = require('./users');
const { home, UserHome } = require('../controllers/homeController');

router.get('/', home);
router.use('/users',userRoutes);

module.exports = router;