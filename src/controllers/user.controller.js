const User = require("../models/user.model");

exports.searchUser = async(req,res)=>{

 const {query} = req.query;

 const user = await User.findOne({

  $or:[
   {email:query},
   {mobile:query}
  ]

 });

 res.json(user);

};