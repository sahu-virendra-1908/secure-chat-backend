const router = require("express").Router();
const upload = require("../services/media.service");
const auth = require("../middlewares/auth.middleware");

router.post(
 "/upload",
 auth,
 upload.single("file"),
 (req,res)=>{

   res.json({
     fileUrl: req.file.path
   });

 }
);

module.exports = router;