const router = require("express").Router();

const userController = require("../controllers/user.controller");

const auth = require("../middlewares/auth.middleware");

router.get("/search",auth,userController.searchUser);

module.exports = router;