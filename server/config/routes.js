var mongoose = require("mongoose");
var users = require("../controllers/users.js");
var path = require('path');


module.exports = function(app){ 

    app.post("/register", function(req, res){
        users.create(req, res);
    });
    app.post("/login", function(req, res){
        users.login(req, res);
    });
    app.get('/get_logged_in_user', function(req, res){
        users.get_logged_in_user(req, res);
    });
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./client/dist/index.html"));
    });
};

