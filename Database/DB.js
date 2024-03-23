const mongoose = require('mongoose')

exports.db = async ()=>{
    await mongoose.connect(process.env.MONGO_DATA)
    .then(()=>{
        console.log("Db is connected");
    }).catch(()=>{
        console.log("Db is not connected");
    })
}
