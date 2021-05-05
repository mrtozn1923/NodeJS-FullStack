const Product = require('../models/product');
// const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Panel-Ürünler',
                products: products,
                path: '/admin/products',
                action: req.query.action
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.getAddProduct = (req, res, next) => {

    res.render('admin/add-product', {
        title: 'Admin Panel-Ürün Ekleme',
        path: '/admin/add-product'
    });
}
exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;

    const product=new Product(name,price,description,imageUrl);
        product.save()
        .then(()=>{
            res.redirect('/admin/products');
        })
        .catch(err=>{
            console.log(err);
        });
}
exports.getEditProduct = (req, res, next) => {

    Product.findById(req.params.productid)
        .then(product=>{
            res.render('admin/edit-product', {
                title: 'Admin Panel-Ürün Düzenleme',
                path: '/admin/products',
                product: product
            });
        })
        .catch(err=>{console.log(err)});
}

exports.postEditProduct = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    // const categoryid = req.body.categoryid;

    const product=new Product(name,price,description,imageUrl,id)

    product.save()
        .then((result) => {
            res.redirect('/admin/products?action=edit');
        })
        .catch(err => console.log(err));

}
exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.productid;
    Product.deleteById(id)
        .then(() => {
            console.log('ürün silindi');
            res.redirect('/admin/products?action=delete');
        })
        .catch(err => console.log(err));
}