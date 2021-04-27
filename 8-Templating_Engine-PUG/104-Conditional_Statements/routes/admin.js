const express=require('express');
const router=express.Router();

const products=[
    {name:'Samsung S8',price:4000,image:'1.jpg',description:'android 8'},
    {name:'Samsung S7',price:3000,image:'2.jpg',description:'android 6'},
    {name:'Samsung S6',price:2000,image:'3.jpg',description:'android 5'},
    {name:'Iphone 9',price:5000,image:'4.jpg',description:'ios 11'}
];


router.get('/add-product',(req,res,next)=>{
    res.render('add-product',
        {
            title:'Ürün Ekleme',
            path:'/admin/add-product'
        });
});

router.post('/add-product',(req,res,next)=>{
    products.push({name:req.body.name,price:req.body.price,image:req.body.image,description:req.body.description});
    res.redirect('/');
});

exports.routes=router;
exports.products=products;