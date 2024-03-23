const mongoose = require("mongoose")

const addElementschema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    ename:{type:String,required:true},
    department:{type:String,required:true},
    ugpg:{type:String,required:true},
    semester:{type:String,required:true},
    description:{type:String,},
    type:{type:String,required:true},
    quantity:{type:String,required:true}
})
exports.addElementModel = mongoose.model('addelement',addElementschema)