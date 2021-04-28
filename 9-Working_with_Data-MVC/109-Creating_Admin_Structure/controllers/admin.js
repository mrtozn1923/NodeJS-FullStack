const Product=require('../models/product');

exports.getProducts = (req, res, next) => {
    const products=Product.getAll();
    res.render('admin/products', {
        title: 'Admin Panel-Ürünler',
        products: products,
        path: '/admin/products'
    });
}
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        title: 'Admin Panel-Ürün Ekleme',
        path: '/admin/add-product'
    });
}
exports.postAddProduct = (req, res, next) => {
    const product=new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description);
    product.saveProduct();
    res.redirect('/admin/products');
}
exports.getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        title: 'Admin Panel-Ürün Düzenleme',
        path: '/admin/edit-product'
    });
}
exports.postEditProduct = (req, res, next) => {
    
    res.redirect('/admin/products');
}