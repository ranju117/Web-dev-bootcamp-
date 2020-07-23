var express     = require("express"),
    router = express.Router({mergeParams: true});
    Temple      = require("../models/temple"),
    Comment = require("../models/comment"),
    middleware = require("../middleware");    

router.get('/',middleware.isLoggedIn,function(req,res){
    

    Temple.findById(req.params.id, function(err, temple){
        if (err) {
            console.log(err);
        } else {
            console.log(temple);
            res.render('newcomment.ejs',{temple:temple});
        }
     });
    

});
router.post('/',middleware.isLoggedIn,function(req,res){

    
    
    Temple.findById(req.params.id, function(err, temple){
        if(err){
            console.log(err);
            res.redirect("/temples");
        } else {
            Comment.create(req.body.comment, function(err, comment){
        if(err){
            console.log(err);          
            } else {

                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();

                    temple.comments.push(comment);
                    //console.log(comment);
                    temple.save();
                    res.redirect("/temples/" + temple._id);
                }
            });
        }
});
});

router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err) {
            res.redirect("back");
        } else {
            res.render("editcomment", {temple_id: req.params.id, comment: foundComment});
        }
    });
});


router.put("/:comment_id", middleware.checkCommentOwnership, function (req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err) {
            res.redirect("back");
        } else {
            res.redirect("/temples/" + req.params.id);
        }
    });
});

router.delete("/:comment_id", middleware.checkCommentOwnership, function (req, res){

   Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
            res.redirect("back");
       } else {
            res.redirect("/temples/" + req.params.id);       
       }
   });
});


module.exports = router;