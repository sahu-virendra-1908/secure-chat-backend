const cron = require("node-cron");
const Message = require("../models/message.model");

cron.schedule("* * * * *", async ()=>{

  const now = new Date();

  const messages = await Message.find({
    selfDestructTimer: { $gt: 0 },
    openedAt: { $ne: null }
  });

  for(const msg of messages){

    const expireTime = new Date(
      msg.openedAt.getTime() + msg.selfDestructTimer * 60000
    );

    if(now > expireTime){

      await Message.deleteOne({_id: msg._id});

    }

  }

});