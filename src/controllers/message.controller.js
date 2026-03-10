const Message = require("../models/message.model");

const {v4:uuidv4} = require("uuid");

exports.storeMessage = async(req,res)=>{

 const {

  receiverId,
  encryptedPayload,
  encryptedMediaUrl,
  nonce,
  selfDestructTimer

 } = req.body;

 const message = await Message.create({

  messageId:uuidv4(),
  senderId:req.userId,
  receiverId,
  encryptedPayload,
  encryptedMediaUrl,
  nonce,
  selfDestructTimer

 });

 res.json(message);

};