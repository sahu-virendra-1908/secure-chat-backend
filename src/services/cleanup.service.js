const cron = require("node-cron");

const Message = require("../models/message.model");

cron.schedule("* * * * *",async()=>{

 const now = new Date();

 const messages = await Message.find({
  openedAt:{$ne:null}
 });

 for(const m of messages){

  const expire = new Date(
   m.openedAt.getTime()+m.selfDestructTimer*60000
  );

  if(now > expire){

   await Message.deleteOne({_id:m._id});

  }

 }

});