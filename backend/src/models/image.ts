import { model } from "mongoose";

const mongoose = require('mongoose');

// export interface product1{
//   name: String,
//   description: String,
//   price: Number,
  
//   id:String,
//   MRP:Number,
//   off:Number,
//   image:[String],
//   tag:String,
 

//   origins:String,
//   deliverTime:String,
//   category: string;
// };
// const product1Schema = new mongoose.Schema({
//   name:{type:String,required:true},
//   description:{type:String,required:true},
//   category: { type: String, required: true },
//   price:{type:Number,required:true},
//   MRP:{type:Number},
//   off:{type:Number,required:true},
//   tag:{type:String,required:true},

  
//   origins:{type:[String],required:true},
//   deliverTime:{type:[String],required:true},
//   images: [String] 
// });
const ImageSchema = new mongoose.Schema({
  color: String,
  urls: [String]
});

const VariantSchema = new mongoose.Schema({
  size: String,
  color: String,
  available: Boolean,
  images: [ImageSchema]
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  MRP: Number,
  off: Number,
  category: String,
  origins: [String],
  deliverTime: [Number], // Assuming deliverTime represents days
  tag: String,
  variants: [VariantSchema]
});
const Product11 = mongoose.model('Productss', productSchema);

module.exports = Product11;

