const express = require('express');
const urlRoutes = express.Router();

const controller = require('../controllers/postController');

urlRoutes.post('/', controller.createPost);

/**
 * @swagger
 * /post/{id}:
 *  get:
 *    summary:  get post by id
 *    tags: [Posts]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *    responses:
 *      200:
 *        description: Post returned Successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Post returned successfully
 */
urlRoutes.get('/:id', controller.getPost);
urlRoutes.put('/:id', controller.updatePost);
urlRoutes.delete('/:id', controller.deletePost);

module.exports = urlRoutes;
