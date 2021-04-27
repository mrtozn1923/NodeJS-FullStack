const express=require('express');
const router=express.Router();
const path=require('path');

router.get('/',(req,res,next)=>{
    const products=[
        {name:'Samsung S8',price:3000,image:'1.jpg',description:'android 8'},
        {name:'Samsung S7',price:3000,image:'1.jpg',description:'android 6'},
        {name:'Samsung S6',price:3000,image:'1.jpg',description:'android 5'},
        {name:'Iphone 9',price:3000,image:'1.jpg',description:'ios 11'}
    ];

    res.render('index',{title:'Anasayfa',products:products});
});

module.exports=router;