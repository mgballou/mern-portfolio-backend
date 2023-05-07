/// dependencies

const express = require('express')
const cors = require('cors')

// import json

const projects = require("./projects.json")
const about = require("./about.json")

// create app

const app = express()

//middleware
app.use(cors())

// home route
app.get("/", (req, res) => {
    res.send("Hello World")
})

// get projects

app.get("/projects", (req, res) => {
    res.json(projects)
})

// get projects

app.get("/about", (req, res) => {
    res.json(about)
})

// declare port
const PORT = process.env.PORT || 4000;

// listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));