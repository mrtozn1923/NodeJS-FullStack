const express=require('express');
const router=express.Router();
const path=require('path');

// /admin/add-product=>GET

//Sadece localhost:3000/add-product isteğini karşılar
router.get('/add-product',(req,res,next)=>{
    res.render('add-product');
});

// /admin/add-product=>POST

//Buradaki yapıya yukarıdaki form action kısmındaki değer ile erişiliyor.
router.post('/add-product',(req,res,next)=>{
    console.log(req.body); //bu şekilde undefined olarak gelir body-parser eklenmeli
    res.redirect('/');
});

module.exports=router;