// Consts
const express = require("express");
const User = require("../models/users")
const router = express.Router();


router.get("/", (req, res) => {
    res.render("add-user", { title: "Add-User" })
})

router.get("/view", async (req, res) => {
    const users = await User.getAll()
    res.render("view-users", { title:"view-users", users })
})

router.post("/", async (req, res) => {
    await User.add(req.body);
    res.redirect("/users/view");
})


router.get("/del/:id", async (req, res) => { 
    await User.remove(req.params.id)
    res.redirect("/users/view")
})


router.get("/edit/:id", async (req, res) => {
    const user = await User.getOne(req.params.id)
    res.render("edit-user", {title:"edit-user", user})
})

router.post("/edit/:id", async (req, res) => {
    await User.edit(req.params.id, req.body)
    res.redirect("/users/view");
})

module.exports = router