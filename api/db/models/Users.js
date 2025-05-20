const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
    is_active:{type:String, default:true},
    first_name:String,
    last_name:String,
    phone_number:String,
},{
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class Users extends mongoose.model{

}

schema.loadClass(Users);
module.exports = mongoose.model("users",schema);