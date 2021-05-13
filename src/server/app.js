const express = require('express')
const morgan = require('morgan')
const path = require('path')
const router = require('./router')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app