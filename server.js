"use strict"
const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
if (process.env.NODE_ENV !== "production") require("dotenv").config()
const app = express()
//Middleware
const corsOptions = {
  exposedHeaders: "authToken",
}
app.use(cors(corsOptions))
app.use(express.json())
const PORT = process.env.PORT || 5000
const URI = process.env.MONGO_URI
//DataBase
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection
connection.once("open", () => console.log("Database is Connected"))
//Routes
const authenticationRouter = require("./Routes/authentication.routes")
const notebookRouter = require("./Routes/notebooks.routes")
app.use("/user", authenticationRouter)
app.use("/notebook", notebookRouter)
//Static Serve
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Client")))
  app.use("/signup", express.static(path.join(__dirname, "Client")))
  app.use("/dashboard", express.static(path.join(__dirname, "Client")))
}
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
