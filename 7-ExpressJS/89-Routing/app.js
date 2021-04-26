const express=require('express');
const app=express();

//Sadece localhost:3000/add-product isteğini karşılar
app.use('/add-product',(req,res,next)=>{
    res.send("<h1>Ürün ekleme sayfası</h1>");
});

//Tüm istekleri karşılar
app.use('/',(req,res,next)=>{
    res.send("<h1>Merhaba ExpressJS</h1>");
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});