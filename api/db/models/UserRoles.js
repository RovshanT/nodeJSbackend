const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id:{type:mongoose.SchemaTypes.ObjectId, required:true},
    user_id:{type:mongoose.SchemaTypes.ObjectId, required:true}

},{
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class UserRoles extends mongoose.model{

}

schema.loadClass(UserRoles);
module.exports = mongoose.model("user_roles",schema);