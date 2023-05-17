#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const ThemesfolderPath = "./Themes/"


//Api calls:
app.post("/themes", (req, res) => {
    res.download(ThemesfolderPath + req.body.title, function(err) {
        if(err) {
            console.log(err);
            res.json([{"result": "theme file does not exist", "filename": req.body.title}]);
        }
    })
})


//start listener on port 5000
app.listen(5000, () => {console.log("Server started on port 5000")})