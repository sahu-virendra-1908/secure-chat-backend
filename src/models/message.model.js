const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  encryptedPayload: String,

  type: {
    type: String,
    enum: ["text","image","voice"],
    default: "text"
  },

  selfDestructTimer: {
    type: Number,
    default: 0
  },

  openedAt: Date,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

messageSchema.index({ senderId: 1, receiverId: 1 });

module.exports = mongoose.model("Message", messageSchema);