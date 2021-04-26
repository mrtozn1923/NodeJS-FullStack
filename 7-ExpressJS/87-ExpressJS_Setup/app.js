const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Merhaba");
});

app.get('/api/products',(req,res)=>{
    res.send("Ürünler listelendi.")
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});