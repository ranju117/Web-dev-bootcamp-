var mongoose    = require("mongoose");


var templeSchema = new mongoose.Schema ({
    name: String,
    img: String,
    desc: String,
    comments: [ 
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Comment"
        }
    ],
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

module.exports = mongoose.model("Temple", templeSchema);