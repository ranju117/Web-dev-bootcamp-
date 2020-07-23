
var Campground = require("../models/temple");
var Comment = require("../models/comment");


var middlewareObj = {};

middlewareObj.checkOwnership=function(req, res, next) {
    if(req.isAuthenticated()) {
        Temple.findById(req.params.id, function (err, foundTemple){
            if(err){
               req.flash("error", "Temple not found!");
               res.redirect("/temples");
           } else {
               if(foundTemple.author.id.equals(req.user._id))  {
                 next();  
               } else {
                req.flash("error", "You don't have permission to do that.");
                res.redirect("back");
               }
           }
        });
    } else {
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership=function(req, res, next) {
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, function (err, foundComment){
            if(err){
               res.redirect("/temples");
           } else {
               if(foundComment.author.id.equals(req.user._id))  {
                 next();  
               } else {
                req.flash("error", "You don't have permission to do that.");
                res.redirect("back");
               }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn=function(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
}

module.exports = middlewareObj;