const express = require('express');
const router = express.Router();
const userRoutes = require('./users');
const { home, UserHome } = require('../controllers/homeController');
const postRoutes = require('./post');
const commentsRoutes = require('./comments');
router.get('/', home);
router.use('/users',userRoutes);
router.use('/posts', postRoutes);
router.use('/comments',commentsRoutes);

module.exports = router;