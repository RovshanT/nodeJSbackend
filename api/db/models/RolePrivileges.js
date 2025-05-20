const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id:{type:mongoose.SchemaTypes.ObjectId, required:true},
    permission:{type:Boolean, default:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required:true}

},{
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class RolePrivileges extends mongoose.model{

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges",schema);