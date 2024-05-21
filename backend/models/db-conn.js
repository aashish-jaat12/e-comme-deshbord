const mongoose =require('mongoose')

module.exports = mongoose.connect("mongodb://127.0.0.1:27017/my-node-proj")
.then(console.log("database connected"))
.catch((e)=> console.log("database not  connected"))


