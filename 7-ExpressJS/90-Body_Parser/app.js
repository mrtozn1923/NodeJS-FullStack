const express=require('express');
const app=express();

app.use(express.urlencoded({extended:false}));

//Sadece localhost:3000/add-product isteğini karşılar
app.use('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head><title>Yeni Ürün Ekle</title></head>
            <body>
                <form action="/product" method="POST">
                    <input type="text" name="product-name">
                    <input type="submit" value="Kaydet">
                </form>
            </body>
        </html>
    `);
});

app.post('/product',(req,res,next)=>{
    console.log(req.body); //bu şekilde undefined olarak gelir body-parser eklenmeli
    res.redirect('/');
});

//Tüm istekleri karşılar
app.use('/',(req,res,next)=>{
    res.send("<h1>Merhaba ExpressJS</h1>");
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});