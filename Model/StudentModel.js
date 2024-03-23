const mongoose = require("mongoose")

const Studentschema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    name:{type:String,required:true},
    roll:{type:String,required:true},
    department:{type:String,required:true},
    ugpg:{type:String,required:true},
    semester:{type:String,required:true},
    regNo:{type:String,},
})
exports.StudentModel = mongoose.model('student',Studentschema)