const Product=require('../models/product');

exports.getIndex = (req, res, next) => {
    const products=Product.getAll();
    res.render('shop/index', {
        title: 'Anasayfa',
        products: products,
        path: '/'
    });
}
exports.getProducts = (req, res, next) => {
    const products=Product.getAll();
    res.render('shop/products', {
        title: 'Ürünler',
        products: products,
        path: '/products'
    });
}
exports.getProduct = (req, res, next) => {
    const productId=req.params.productid;
    const product=Product.getById(productId);
    res.render('shop/product-detail',{
        title:product.name,
        product:product,
        path:'/products' 
    });  
}
exports.getProductDetails = (req, res, next) => {
    res.render('shop/details', {
        title: 'Detaylar',
        path: '/details'
    });
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Alışveriş Sepeti',
        path: '/cart'
    });
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Siparişler',
        path: '/orders'
    });
}