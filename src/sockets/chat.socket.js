const socketIO = require("socket.io");
const Message = require("../models/message.model");

module.exports = (server) => {

  const io = socketIO(server,{
    cors:{origin:"*"}
  });

  io.on("connection",(socket)=>{

    console.log("User connected");

    socket.on("join",(userId)=>{
      socket.join(userId);
    });

    socket.on("sendMessage", async (data)=>{

      try{

        const message = await Message.create({
          senderId: data.senderId,
          receiverId: data.receiverId,
          encryptedPayload: data.text,
          type: data.type,
          selfDestructTimer: data.selfDestructTimer
        });

        io.to(data.receiverId).emit("receiveMessage", message);

      }catch(err){
        console.log(err);
      }

    });

  });

};