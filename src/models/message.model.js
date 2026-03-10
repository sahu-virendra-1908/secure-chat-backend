const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

 senderId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 receiverId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 encryptedPayload:String,

 type:{
  type:String,
  enum:["text","image","voice"],
  default:"text"
 },

 selfDestructTimer:{
  type:Number,
  default:0
 },

 openedAt:Date,

 createdAt:{
  type:Date,
  default:Date.now
 }

});

module.exports = mongoose.model("Message",messageSchema);