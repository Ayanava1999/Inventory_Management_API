const { InventoryModel } = require("../Model/InventoryModel")


exports.newInventory = async(req,res)=>{
    try {
        req.body.element.map(async(data)=>(
            await InventoryModel.create({
                userId:req.user._id,
                stream:req.user.department,
                name:req.body.data.name,
                elementname:data.elementname,
                quantity:data.quantity,
                ugpg:req.user.ugpg,
                semester:req.user.semester
            })
        ))
        console.log("sucessfull Data Submit");
        res.status(200).send("sucessfull Data Submit")
      } catch (err) {
        res.status(400).send("Error Occured")
      }
}

exports.viewInventory=async(req,res)=>{
    try{
    const inventory = await InventoryModel.find({name:req.params.id,return:false}).populate('elementname')
    res.status(200).send(inventory)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewCheckInventory=async(req,res)=>{
    try{
    const inventory = await InventoryModel.find({ugpg:req.user.ugpg,stream:req.user.department,semester:req.user.semester,return:false})
    res.status(200).send(inventory)
    }catch(err){
        res.status(400).send("error")
    }
}
exports.viewAllInventory=async(req,res)=>{
    try{
    const inventory = await InventoryModel.find({ ugpg:req.user.ugpg,stream:req.user.department,semester:req.user.semester,return:true}).populate("name").populate("elementname")
    res.status(200).send(inventory)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.Updateinventory=async(req,res)=>{
    try{
    const id=req.params.id;
    const inventory = await InventoryModel.findByIdAndUpdate(id,{return:true});
    res.status(200).send(inventory)
    }catch(error){
        res.status(400).send("error Occur")
    }
}

