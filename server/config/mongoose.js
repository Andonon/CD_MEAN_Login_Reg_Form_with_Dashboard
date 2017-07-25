var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// default to es6 promises, mongoose promises are deprecated. 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sundaytest_20170723', {useMongoClient: true});      

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, './../models');

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(file => {
    if(file.toLowerCase().includes(".js")){
        require(path.join(models_path, file));
    }
});
