var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    
    firstname: { type: String, required: true, minlength: 1},
    lastname: { type: String, required: true, minlength: 1},
    email: { type: String, required: true, minlength: 1}, 
    password: { type: String, required: true, minlength: 1}
}, 
    {timestamps:true});

var User = mongoose.model("User", userSchema);