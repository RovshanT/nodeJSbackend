const mongoose = require("mongoose");

const schema = mongoose.Schema({
    is_active:{type:Boolean, default:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required:true}
},{
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class Categories extends mongoose.model{

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories",schema);