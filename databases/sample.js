var mongooose=require('mongooose');
mongoose.connect("127.0.0.1:59432/cats"); 
var Cat_schema = mongoose.Schema;

var Cat = new Cat_schema({
  name: String,
  breed: Date
});

