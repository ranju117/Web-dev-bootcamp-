var express     = require("express"),
    router = express.Router(),
    User      = require("../models/user");
        
router.get('/',function(req,res){

    res.render('landing.ejs');
    
    });
    
router.get("/register", function(req, res){
        res.render("register");
    });
    
router.post("/register", function(req, res){
        var newUser = new User({username: req.body.username});
        User.register(newUser, req.body.password, function(err, user){
            if (err){
                req.flash("error", err.message);
                return res.render("register");
                }
                passport.authenticate("local")(req, res, function(){
                    console.log('New user registration');
                    res.redirect("/temples");
            });
        });
    });
    
router.get('/login',function(req,res){
    
        res.render('login.ejs');
    
    
    });
    
router.post("/login", passport.authenticate("local", 
        {    
            successRedirect: "/temples",
            failureRedirect: "/login"
        }), function(req, res){ 
    });
    
router.get("/logout", function(req, res){
    req.flash("success", "Succesfully logged you out");
        req.logout(); 
        res.redirect("/temples");
    });
    

function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        res.redirect("/login");
    }

module.exports = router;