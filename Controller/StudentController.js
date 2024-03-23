const { StudentModel } = require("../Model/StudentModel")

exports.newStudent = async (req, res) => {
  try {
    const sameData = await StudentModel.findOne({regNo:req.body.regNo,department:req.user.department,ugpg:req.user.ugpg,semester:req.user.semester})
    if(sameData){
        return res.status(400).send("This Registration Number Already Register")
    }
    const {name,roll,regNo}=req.body;
    const student = await StudentModel.create({
        name,roll,regNo,userId:req.user._id,department:req.user.department,ugpg:req.user.ugpg,semester:req.user.semester
    })
    res.status(200).send(student)
  } catch (err) {
    res.status(400).send("Error Occured")
  }
}

exports.viewAllstudent = async(req,res)=>{
    try{
        const student = await StudentModel.find({department:req.user.department,ugpg:req.user.ugpg,semester:req.user.semester})
        res.status(200).send(student)
    }catch(error){
        res.status(400).send("Error Occured")
    }
}

exports.deleteStudent=async(req,res)=>{
    try{
    const element = await StudentModel.findByIdAndRemove({_id:req.params.id})
    res.status(200).send(element)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.viewOneStudent=async(req,res)=>{
    try{
    const vessel = await StudentModel.findOne({_id:req.params.id})
    res.status(200).send(vessel)
    }catch(err){
        res.status(400).send("error")
    }
}

exports.UpdateStudent=async(req,res)=>{
    try{
    const id=req.params.id;
   const {name,roll,regNo}=req.body;
    const element = await StudentModel.findByIdAndUpdate(id,{name,roll,regNo});
    res.status(200).send(element)
    }catch(error){
        res.status(400).send("error Occur")
    }
}
