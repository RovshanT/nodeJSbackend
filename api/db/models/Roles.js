const schema = mongoose.Schema({
    role_name:{type:String, required:true},
    is_active:{type:Boolean, default:true},
    created_by:{type:mongoose.SchemaTypes.ObjectId, required:true}
},{
    versionKey:false,
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class Roles extends mongoose.model{

}

schema.loadClass(Roles);
module.exports = mongoose.model("roles",schema);