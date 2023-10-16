const express=require("express")
const router=express.Router();
const control=require("../controllers/index.controler")


router.post('/decryptData',control.decrypt)
router.post('/encryptData',control.encrypt)
router.get('/generateKeyMaterial',control.KeyMaterial)
module.exports=router