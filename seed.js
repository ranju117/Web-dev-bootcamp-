var mongoose    = require("mongoose");
var Temple  = require("./models/temple");
var Comment     = require("./models/comment");


var data =[
    {
        name: "Kapaleeswarar",
        img: "https://th.thgim.com/news/cities/chennai/s6q2hi/article25396074.ece/alternates/FREE_435/02THKAPALITEMPLE",
        desc: "Kapaleeshwarar Temple[1] is a Hindu temple dedicated to lord Shiva located in Mylapore, Chennai in the Indian state of Tamil Nadu. The form of Shiva's consort Parvati worshipped at this temple is called Karpagambal is from Tamil (Goddess of the Wish-Yielding Tree). The temple is the most ancient one that has been built around the 7th century CE in Dravidian architecture"
    },
    {
        name: "Annamalaiyar",
        img: "https://www.holidify.com/images/cmsuploads/compressed/21731707424_10173767ae_b_20171219194000.jpg",
        desc: "Arulmigu Annamalaiyar Tirukoil, also called Annamalaiyar Temple (Sanskritised as Arunachaleswarar Temple), is a Hindu temple dedicated to the deity Shiva, located at the base of Arunachala hill in the town of Thiruvannamalai in Tamil Nadu, India. It is significant to the Hindu sect of Saivism as one of the temples associated with the five elements, the Pancha Bhoota Stalas, and specifically the element of fire, or Agni."
    },
   
]



function seedDB() {

    Temple.remove({}, function(err){
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log("Removed temples.");
              
    //         data.forEach(function(seed){
    //             Temple.create(seed, function(err, temple){
    //                 if(err){
    //                     console.log(err);
    //                 } else {
    //                     console.log("Added a temple");
                        
    //                     Comment.create(
    //                         {
    //                             text: "This place is great, but I wish I had internet to share the beautiful pictures of the architecture",
    //                             author: "Harish"
    //                         }, function(err, comment){
    //                             if(err) {
    //                                 console.log(err);
    //                             } else {
    //                                 temple.comments.push(comment);
    //                                 temple.save();
    //                                 console.log("Created new comment.");
    //                             }
    //                         });
    //                 }
    //             });
    //         });
     });
        
}

module.exports = seedDB;
