const Product = require('../models/product');
const Category = require('../models/category');

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
    // const categoryid = req.body.categoryid;
    const description = req.body.description;
/*
    Product.create({
        name:name,
        price:price,
        imageUrl:imageUrl,
        description:description
    })
    .then(result=>{
        console.log(result);
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
*/
    const prd=Product.build({
        name:name,
        price:price,
        imageUrl:imageUrl,
        description:description
    });

    prd.save()
        .then(result=>{
            console.log(result);
            res.redirect('/');
        })
        .catch(err=>{
            console.log(err);
        });
}
exports.getEditProduct = (req, res, next) => {

    Product.findByPk(req.params.productid)
        .then((product) => {
            Category.findAll()
                .then((categories) => {
                    res.render('admin/edit-product', {
                        title: 'Admin Panel-Ürün Düzenleme',
                        path: '/admin/products',
                        product: product,
                        categories: categories
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.postEditProduct = (req, res, next) => {
    const product = new Product();
    product.id = req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.imageUrl = req.body.imageUrl;
    product.description = req.body.description;
    product.categoryid = req.body.categoryid;

    Product.Update(product)
        .then(() => {
            res.redirect('/admin/products?action=edit');
        })
        .catch((err) => {
            console.log(err);
        });

}
exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productid)
        .then(() => {
            res.redirect('/admin/products?action=delete');
        })
        .catch((err) => {
            console.log(err);
        });
}