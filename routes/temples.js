var express     = require("express");
var router = express.Router({mergeParams: true});
var middleware = require("../middleware");
var Temple      = require("../models/temple");



router.get('/',function(req,res){

    Temple.find({}, function(err, allTemples){
        if (err) {
            console.log(err);
        } else {
             res.render("temples.ejs", {temple_list:allTemples}); 
        }   
        });

//res.render('temples.ejs',{temple_list:temples});

});

router.get('/new',middleware.isLoggedIn,function(req,res){

    res.render('new_temple.ejs');
    
    });

router.get('/:id',function(req,res){

    Temple.findById(req.params.id).populate("comments").exec(function(err, foundTemple){
        if (err) {
            console.log(err);
        } else {
            
            res.render("showpage", {foundTemple: foundTemple});
        }
     });

});

router.post('/',function(req,res){

var t_name=req.body.name;
var t_img=req.body.img;
var t_desc=req.body.desc;
var id=req.user._id;
var username = req.user.username;


//var new_obj={name:t_name,img:t_img};
var new_temple=new Temple({
   
    name:t_name, 
    img:t_img,
    desc:t_desc,
    author:{
        id:id,
        username:username
    }
});
new_temple.save(function(err,new_temple){
    
    if(err)
    console.log(err);
    
    else
    console.log(new_temple+ 'added to the db');
    
    });
//temples.push(new_obj);
//console.log(new_obj);
res.redirect('/temples');
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

router.get("/:id/edit",middleware.checkOwnership,function (req, res){
    Temple.findById(req.params.id, function(err, foundTemple){
       res.render("edit", {temple: foundTemple});
 });
});


router.put("/:id", function(req, res){

    Temple.findByIdAndUpdate(req.params.id, req.body.temple, function(err, updatedTemple){
       if(err){
           res.redirect("/temples");
       } else {
           res.redirect("/temples/" + req.params.id);
       }
    });

 });
 
 
 router.delete("/:id",middleware.checkOwnership,function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
       if(err){
           res.redirect("/temples");
       } else {
           res.redirect("/temples");
              }
     });
 });

module.exports = router;