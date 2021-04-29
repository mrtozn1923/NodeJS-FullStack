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

    const product=Product.getById(req.params.productid);

    res.render('admin/edit-product', {
        title: 'Admin Panel-Ürün Düzenleme',
        path: '/admin/products',
        product:product
    });
}
exports.postEditProduct = (req, res, next) => {
    const product=Product.getById(req.body.id);
    product.name=req.body.name;
    product.price=req.body.price;
    product.imageUrl=req.body.imageUrl;
    product.description=req.body.description;

    Product.Update(product);
    res.redirect('/admin/products');
}