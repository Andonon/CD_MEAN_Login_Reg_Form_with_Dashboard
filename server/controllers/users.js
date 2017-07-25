
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

    create: function(req, res){  
        var user = new User({
            firstname: req.body.firstname, 
            lastname: req.body.lastname, 
            email: req.body.email, 
            password: req.body.password
        });
        // check for the user... does email alread exist in db. 
         User.find({email: req.body.email})
            .then((response) =>{
                console.log("existing user found");
                res.json(true);
            })
            .catch((err) => {
                console.log("did not find existing user, saving new user");
                user.save()
                    .then((response)=>{
                        console.log("saved a user", response);
                        res.json(user);
                        req.session.user_id = user._id;
                    })
                    .catch((err)=>{
                        console.log("inside the .catch");
                        console.log(err);
                        res.json("false");
                    });
            });
        // if the user is not found, go ahead and save this one 
    },
    login: function(req, res){
        console.log("inside LOGIN users here's the stuff", req.body);
        var user = new User({
            email: req.body.email, 
            password: req.body.password
        });
        console.log(user);
        User.findOne({email: user.email})
            .exec(function(err, user){
                if(err){
                    res.json("false");
                }
                else{
                    req.session.user_id = user._id;
                    res.json(user);
                }
            });
    },
    logout: (req, res) => {
        req.session.destroy();
        req.redirect('/');
    },
    get_logged_in_user: (req, res) => {
        if(req.session.user_id){
            user = User.findOne({_id: req.session.user_id})
                .then(user => res.json(user))
                .catch(err => res.status(500).json(err));
        } else {
            res.json(false);
        }
    },    
};