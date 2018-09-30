var express = require('express');
var app = express();
var port = 3000;

    app.get("/", (req, res) => {
        res.send("Memory Matching Game Server Side!");
    });

    app.listen(port, () => {
        console.log("Server listening on port " + port);
    });

    var bodyParser = require('body-parser');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
    var mongoose = require("mongoose");
        mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");

    var nameSchema = new mongoose.Schema({
        firstName: String,
        lastNameName: String
    });

    var User = mongoose.model("User", nameSchema);

    app.post("/addname", (req, res) => {
        var myData = new User(req.body);
        myData.save()
        .then(item => {
        res.send("item saved to database");
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
        });
    });