#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const ThemesfolderPath = "./Themes/"


//Api calls:
app.post("/themes/:fileName", (req, res) => {

    res.download(ThemesfolderPath + req.params.fileName, function(err) {
        if(err) {
            console.log(err);
            res.json([{"result": "theme file does not exist", "filename": req.params.fileName}]);
        }
    })
})


//start listener on port 5000
app.listen(5000, () => {console.log("Server started on port 5000")})