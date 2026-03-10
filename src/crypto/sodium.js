const sodium = require("libsodium-wrappers");

exports.init = async()=>{

 await sodium.ready;

 return sodium;

};