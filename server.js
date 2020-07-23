var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    methodOverride = require("method-override"),
    flash       = require("connect-flash"), 
    Comment     = require("./models/comment"),
    Temple      = require("./models/temple"),
    seedDB      = require("./seed");
    User        = require("./models/user");
    passport    = require("passport"),
    LocalStrategy   = require("passport-local");
      

    var commentRoutes    = require("./routes/comments"),
    templeRoutes = require("./routes/temples"),
    indexRoutes      = require("./routes/index");


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));


var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/temples");

//seedDB();
/*
var temples=[{name:'Kapaleeswarar', img:'https://th.thgim.com/news/cities/chennai/s6q2hi/article25396074.ece/alternates/FREE_435/02THKAPALITEMPLE'},
{name:'Annamalaiyar', img:'https://www.holidify.com/images/cmsuploads/compressed/21731707424_10173767ae_b_20171219194000.jpg'},
{name:'Meenakshi amman', img:'https://www.culturalindia.net/iliimages/Meenakshi-Temple-ili-334-img-5.jpg'},
{name:'Kapaleeswarar', img:'https://th.thgim.com/news/cities/chennai/s6q2hi/article25396074.ece/alternates/FREE_435/02THKAPALITEMPLE'},
{name:'Annamalaiyar', img:'https://www.holidify.com/images/cmsuploads/compressed/21731707424_10173767ae_b_20171219194000.jpg'},
{name:'Meenakshi amman', img:'https://www.culturalindia.net/iliimages/Meenakshi-Temple-ili-334-img-5.jpg'}
]
*/
app.use(flash());

app.use(require("express-session")({
    secret: "god save",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
                

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
 });

 app.use("/",indexRoutes);
 app.use("/temples",templeRoutes);
 app.use("/temples/:id/comments",commentRoutes);


app.listen(3001,function(){

    console.log('App running on port 3k1');
});