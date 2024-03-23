const mongoose = require("mongoose")

const addInventoryschema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    name:{type:mongoose.Schema.Types.ObjectId,ref:"student",required:true},
    elementname: {type:mongoose.Schema.Types.ObjectId,ref:"addelement",required:true},
    quantity: {type:String,required:true},
    return:{type:Boolean,required:true,default:false},
    ugpg:{type:String,required:true},
    semester:{type:String,required:true},
    stream:{type:String,required:true},
    date:{type:Date,required:true,default:Date.now()}
})
exports.InventoryModel = mongoose.model('inventory',addInventoryschema)