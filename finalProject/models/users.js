// Consts
const mongoose = require("mongoose")
const schema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true }
})

// Object model
const User = mongoose.model("User", schema);

// Methods
const getAll = () => {
  return User.find()
}

const getOne = (id) => {
  return User.findById(id)
}

const add = (user) => {
  return new User(user).save()
}

const remove = (_id) => {
  return User.deleteOne({ _id })
}

const edit = (_id, user) => {
  return User.findByIdAndUpdate({ _id }, user)
}

module.exports = { getAll, getOne, add, remove, edit }
