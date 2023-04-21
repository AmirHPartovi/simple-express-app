const express = require('express')

const friendsController = require('../controllers/friends.controller')


const friendsRouter =express.Router();

friendsRouter.get('/',friendsController.getAllFriends)

friendsRouter.get('/:friendId',friendsController.getOneFriends)
friendsRouter.post('/',friendsController.postNewFriends)

module.exports = friendsRouter