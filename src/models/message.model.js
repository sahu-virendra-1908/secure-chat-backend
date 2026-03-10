const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

 messageId:String,

 senderId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 receiverId:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 encryptedPayload:String,

 encryptedMediaUrl:String,

 nonce:String,

 selfDestructTimer:Number,

 openedAt:Date,

 createdAt:{
  type:Date,
  default:Date.now
 }

});

module.exports = mongoose.model("Message",messageSchema);