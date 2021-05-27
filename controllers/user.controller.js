const models = require('../models')
const User = models.user;

//create
const register = async (req, res) => {
  const user = req.body
  await User.create(
    user
  );

  res.json("Registration successful")
}

//read
const getAllUsers = async (req, res) => {
  const users = await User.findAll()

  res.send(users)
}

const getUser = async (req, res) => {
  const name = req.params.name

  const user = await User.findOne({where: { name }})

  res.send(user)
}

//update
const updateUser = async (req, res) => {
const user = req.body
const name = req.params.name

await User.update(user, { where: { name }})

res.json(`${user} has been updated`)
}

//delete
const deleteUser = async (req, res) => {
const name = req.params.name

await User.destroy({where: { name }})

res.json(`${name} has been deleted!`)
}

module.exports = {
  register, getAllUsers, getUser, updateUser, deleteUser
}