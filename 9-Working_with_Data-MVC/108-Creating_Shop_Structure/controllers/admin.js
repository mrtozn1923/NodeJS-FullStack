const Product=require('../models/product');

// exports.getProducts = (req, res, next) => {
//     const products=Product.getAll();
//     res.render('index', {
//         title: 'Anasayfa',
//         products: products,
//         path: '/'
//     });
// }
// exports.getAddProduct = (req, res, next) => {
//     res.render('add-product', {
//         title: 'Ürün Ekleme',
//         path: '/admin/add-product'
//     });
// }
// exports.postAddProduct = (req, res, next) => {
//     const product=new Product(
//         req.body.name,
//         req.body.price,
//         req.body.imageUrl,
//         req.body.description);
//     product.saveProduct();
//     res.redirect('/');
// }