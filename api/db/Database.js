const mongoose = require("mongoose");
//mongoose.set('debug', true); 
const { CONNECTION_STRING } = require("../config/");
//const { cache } = require("react");
let instance =null;


class Database {

    constructor() {

        if(!instance) {

            this.mongoConnection=null;
            instance=this;
        }

        return instance;

    }

    async connect(options){

        try{
                    
        console.log("Connection is connecting...")
        let db = await mongoose.connect(options.CONNECTION_STRING); // 'mongodb://localhost:27017/project1'

        this.mongoConnection = db;
        console.log("Connection is OK!")
    }catch(err){
        console.error(err);
        process.exit(1);
    }
    } 
}

module.exports=Database;