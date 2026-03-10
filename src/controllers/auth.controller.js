const bcrypt = require("bcrypt");

const User = require("../models/user.model");

const {generateToken} = require("../services/jwt.service");

exports.register = async(req,res)=>{

 try{

  const {username,email,mobile,password,publicKey} = req.body;

  const hash = await bcrypt.hash(password,10);

  const user = await User.create({

   username,
   email,
   mobile,
   passwordHash:hash,
   publicKey

  });

  const token = generateToken(user._id);

  res.json({user,token});

 }catch(err){

  res.status(500).json(err);

 }

};
exports.login = async(req,res)=>{

 const {email,mobile,password} = req.body;

 const user = await User.findOne({

  $or:[
   {email},
   {mobile}
  ]

 });

 if(!user) return res.status(404).send("User not found");

 const valid = await bcrypt.compare(password,user.passwordHash);

 if(!valid) return res.status(401).send("Invalid password");

 const token = generateToken(user._id);

 res.json({token,user});

};