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
        // .then(products=>{
        //     res.render('admin/edit-product', {
        //         title: 'Admin Panel-Ürün Düzenleme',
        //         path: '/admin/products',
        //         product: products[0]
        //     });
        // })
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
    const categoryid = req.body.categoryid;

    Product.findByPk(id)
        .then(product => {
            product.name = name;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description;
            product.categoryId=categoryid;
            return product.save();
        })
        .then((result) => {
            console.log("ürün güncellendi")
            res.redirect('/admin/products?action=edit');
        })
        .catch(err => console.log(err));

}
exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.productid;
    Product.findByPk(id)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            console.log('ürün silindi');
            res.redirect('/admin/products?action=delete');
        })
        .catch(err => console.log(err));
}