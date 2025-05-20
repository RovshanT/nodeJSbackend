const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level:String,
    email:String,
    location:String,
    proc_type:String,
    log:String,
},{
    timestamps: {
        createdAt:"created_time",
        updatedAt:"updated_time"
    }

   });

class AuditLogs extends mongoose.model{

}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("audit_logs",schema);