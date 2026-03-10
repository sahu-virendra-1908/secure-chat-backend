require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");

const connectDB = require("./database");

const authRoutes = require("../routes/auth.routes");
const userRoutes = require("../routes/user.routes");
const messageRoutes = require("../routes/message.routes");
const mediaRoutes = require("../routes/media.routes");


const socketInit = require("../sockets/chat.socket");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/media",mediaRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/messages",messageRoutes);

const server = http.createServer(app);

socketInit(server);

server.listen(process.env.PORT,()=>{

 console.log("Server running on port",process.env.PORT);

});