const express=require('express');
const router=express.Router();

const accountController=require('../controllers/account');
const locals=require('../middleware/locals');

router.get('/login',locals,accountController.getLogin);
router.post('/login',locals,accountController.postLogin);

router.get('/register',locals,accountController.getRegister);
router.post('/register',locals,accountController.postRegister);

router.get('/logout',accountController.getLogout);

module.exports=router;