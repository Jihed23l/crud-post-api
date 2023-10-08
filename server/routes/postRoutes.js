const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/postController');

urlRoutes.post('/', controller.createPost);
urlRoutes.get('/:id', controller.getPost);
urlRoutes.put('/:id', controller.updatePost);
urlRoutes.delete('/:id', controller.deletePost);

module.exports = urlRoutes;
