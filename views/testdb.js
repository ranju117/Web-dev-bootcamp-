var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema(
{
name:String,
age:String,
desc:String,

}
);
var Cat = mongoose.model("Cat",catSchema);

var george=new Cat({

    name:"George",
    age:"12",
    desc:"Grouchy",


});

george.save(function(err,cat){

if(err)
console.log(err);

else
console.log(cat);

});