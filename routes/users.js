let express = require('express');
let router = express.Router();
const userController = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', userController.getAllUsers);

router.post('/register', userController.register)

router.get('/:name', userController.getUser)

router.delete('/:name', userController.deleteUser)

module.exports = router;
