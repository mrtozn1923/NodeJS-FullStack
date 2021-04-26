const express=require('express');
const router=express.Router();

// /admin/add-product=>GET

//Sadece localhost:3000/add-product isteğini karşılar
router.get('/add-product',(req,res,next)=>{
    res.send(`
        <html>
            <head><title>Yeni Ürün Ekle</title></head>
            <body>
                <form action="/admin/add-product" method="POST">
                    <input type="text" name="product-name">
                    <input type="submit" value="Kaydet">
                </form>
            </body>
        </html>
    `);
});

// /admin/add-product=>POST

//Buradaki yapıya yukarıdaki form action kısmındaki değer ile erişiliyor.
router.post('/add-product',(req,res,next)=>{
    console.log(req.body); //bu şekilde undefined olarak gelir body-parser eklenmeli
    res.redirect('/');
});

module.exports=router;