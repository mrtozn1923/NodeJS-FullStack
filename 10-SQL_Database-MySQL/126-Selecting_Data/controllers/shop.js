const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {
    const categories = Category.getAll();

    Product.getAll()
        .then(products => {
            res.render('shop/index', {
                title: 'Anasayfa',
                products: products[0],
                categories: categories,
                path: '/'
            });
        })
        .catch((err)=>{
            console.log(err);
        });

}
exports.getProducts = (req, res, next) => {
    const categories = Category.getAll();

    Product.getAll()
        .then(products => {
            res.render('shop/products', {
                title: 'Ürünler',
                products: products[0],
                categories: categories,
                path: '/'
            });
        })
        .catch((err)=>{
            console.log(err);
        });
}
exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    const categories = Category.getAll();

    res.render('shop/products', {
        title: 'Ürünler',
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path: '/products'
    });
}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productid;
    const product = Product.getById(productId);
    res.render('shop/product-detail', {
        title: product.name,
        product: product,
        path: '/products'
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