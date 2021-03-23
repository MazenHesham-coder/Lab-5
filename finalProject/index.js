// Consts

const express = require("express")
const mongoose = require("mongoose")
const usersRouter = require("./routes/users")
const userViewsRouter = require("./routes/usersViews")
const path = require("path")  // retrieves the absolute path of the file
const app = express()

// Mongoose connection
mongoose.connect("mongodb://localhost/finalProject", {useNewUrlParser: true,useUnifiedTopology: true})
  .then(() => {console.log("connected to mongodb")})

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public")) // Allows you to serve static files from a folder, such html, icons, styles, ...
app.set("view engine", "ejs")
app.use("/api/users", usersRouter) // to retrieve data
app.use("/users", userViewsRouter) // to view the html 

// Main request
app.get("/", (req, res) => {
   //res.sendFile(path.join(__dirname, "htmls", "main.html"))  // should take absilute path!
  res.render("main", { title:"Users App"})
})
  
// Server Port
app.listen(8000, () => {
  console.log("listening on port 8000")
})

