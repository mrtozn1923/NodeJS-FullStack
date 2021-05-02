const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {
    Category.getAll()
        .then((categories) => {
            Product.getAll()
                .then(products => {
                    res.render('shop/index', {
                        title: 'Anasayfa',
                        products: products[0],
                        categories: categories[0],
                        path: '/'
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
exports.getProducts = (req, res, next) => {
    Category.getAll()
        .then((categories) => {
            Product.getAll()
                .then(products => {
                    res.render('shop/products', {
                        title: 'Ürünler',
                        products: products[0],
                        categories: categories[0],
                        path: '/products'
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
exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    Category.getAll()
        .then((categories) => {
            Product.getProductsByCategoryId(categoryid)
                .then(products => {
                    res.render('shop/products', {
                        title: 'Ürünler',
                        products: products[0],
                        categories: categories[0],
                        selectedCategory: categoryid,
                        path: '/products'
                    });
                })
                .catch((err) => {
                    console.log(err => {
                        console.log(err);
                    });
                });
        })
        .catch(err => {
            console.log(err);
        });



}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productid;
    Product.getById(productId)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
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