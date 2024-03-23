const { addElementModel } = require("../Model/AddelementModel")
const { StudentModel } = require("../Model/StudentModel")


exports.newElement = async (req, res) => {
  try {
    const sameData = await addElementModel.findOne({ename:req.body.ename,department:req.user.department,ugpg:req.user.ugpg,semester:req.user.semester})
    if(sameData){
        return res.status(400).send("This element name already register")
    }
    const {ename,description,type,quantity}=req.body

    const broker = await addElementModel.create({
        ename,description,type,quantity,userId:req.user._id,department:req.user.department,ugpg:req.user.ugpg,semester:req.user.semester
    })
    res.status(200).send(broker)
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.viewAllElement = async(req,res)=>{
    try{
        const view = await addElementModel.find({department:req.user.department})
        res.status(200).send(view)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.deleteelement=async(req,res)=>{
    try{
    const element = await addElementModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(element)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneelement=async(req,res)=>{
    try{
    const vessel = await addElementModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.Updateelement=async(req,res)=>{
    try{
    const id=req.params.id;
    const {ename,description,quantity}=req.body
    const element = await addElementModel.findByIdAndUpdate(id,{ename,description,quantity});
    res.status(200).send(element)
    }catch(error){
        res.status(400).send("error Occur")
    }
}
