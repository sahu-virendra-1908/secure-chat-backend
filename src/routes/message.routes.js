const router = require("express").Router();

const messageController = require("../controllers/message.controller");

const auth = require("../middlewares/auth.middleware");

router.post("/",auth,messageController.storeMessage);

module.exports = router;