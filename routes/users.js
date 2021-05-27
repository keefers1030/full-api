var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getAllUsers)
router.post('/register', userController.register)
router.get('/:name', userController.getUser)
router.put('/:name', userController.updateUser)
router.delete('/:name', userController.deleteUser)


module.exports = router;
