const socketIO = require("socket.io");

module.exports = (server)=>{

 const io = socketIO(server,{
  cors:{origin:"*"}
 });

 io.on("connection",(socket)=>{

  console.log("User connected");

  socket.on("join",(userId)=>{

   socket.join(userId);

  });

  socket.on("sendMessage",(data)=>{

   io.to(data.receiverId).emit("receiveMessage",data);

  });

 });

};