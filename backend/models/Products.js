const mongoose =require('mongoose')

const ProductSchema = new mongoose.Schema({

name: String,
price: String,
category: String,
userId: String,
company: String


})
const product = new mongoose.model('Products' , ProductSchema)


module.exports = product;