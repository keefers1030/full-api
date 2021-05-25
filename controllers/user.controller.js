const models = require('../models');
const User = models.user

const register = async (req, res) => {
  const data = req.body;
  await User.create(
    data
  );
  res.json("Registration successful");
}

const getAllUsers = async (req, res) => {
  const allUsers = await User.findAll()

  res.send(allUsers)
}

const getUser = async (req, res) => {
  const name = req.params.name

  const user = await User.findOne({where: { name } })

  res.send(user)
}

const deleteUser = async (req, res) => {
  const name = req.params.name

  const user = await User.destroy({where: { name } })

  res.json(`${name} was deleted successfully!`)
}


module.exports = {
  register,
  getAllUsers,
  deleteUser,
  getUser
}