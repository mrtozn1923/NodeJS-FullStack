const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.find()
        .then(products => {
            res.render('shop/index', {
                title: 'Alışveriş',
                products: products,
                path: '/'
            });
            // Category.findAll()
            //     .then(categories=>{
            //         res.render('shop/index', {
            //             title: 'Alışveriş',
            //             products: products,
            //             path: '/',
            //             categories:categories
            //         });
            //     })
        })
        .catch((err) => {
            console.log(err);
        });

}
exports.getProducts = (req, res, next) => {
    
    Product
        .find()
        // .find({price:{$eq:2000}})
        // .find({price:{$ne:2000}})
        // .find({price:{$gt:2000}})
        // .find({price:{$gte:2000}})
        // .find({price:{$lt:2000}})
        // .find({price:{$lte:2000}})
        // .find({price:{$in:[1000,2000,3000]}}) 
        // .find({price:{$gte:1000,$lte:2000}}) 
        // .find({price:{$gt:2000},name:'Samsung S6'}) 
        // .or({price:{$gt:2000},name:'Samsung S6'}) 
        //--------Kelime Arama
        // .find({name:/^Samsung/}) //start with
        // .find({name:/Samsung$/}) // ends with
        // .find({name:/.*Samsung.*/}) //contains
        //----------------------
        .then(products => {
            res.render('shop/products', {
                title: 'Ürünler',
                products: products,
                path: '/products'
            });
            // Category.findAll()
            //     .then(categories => {
            //         res.render('shop/products', {
            //             title: 'Ürünler',
            //             products: products,
            //             path: '/products',
            //             categories: categories
            //         });
            //     })
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const model = [];

    Category.find()
        .then(categories => {
            model.categories = categories;
            return Product.findByCategoryId(categoryid);
        })
        .then(products => {
            res.render('shop/products', {
                title: 'Ürünler',
                products: products,
                categories: model.categories,
                selectedCategory: categoryid,
                path: '/products'
            });
        })
        .catch(err => console.log(err));

}
exports.getProduct = (req, res, next) => {

    Product
        // .findById(req.params.productid)
        .findOne({_id:req.params.productid})
        .then(product => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(products => {
            res.render('shop/cart', {
                title: 'Alışveriş Sepeti',
                path: '/cart',
                products: products
            });
        })
        .catch(err => {
            console.log(err);
        });
}
exports.postCart = (req, res, next) => {

    const productId = req.body.productId;
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(() => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
}
exports.postCartItemDelete = (req, res, next) => {
    const productid = req.body.productid;

    req.user
        .deleteCartItem(productid)
        .then(() => {
            res.redirect('/cart');
        });
}

exports.getOrders = (req, res, next) => {
    req.user.getOrders()
        .then(orders => {
            res.render('shop/orders', {
                title: 'Siparişler',
                path: '/orders',
                orders: orders
            });
        })
        .catch(err => console.log(err));
}

exports.postOrder = (req, res, next) => {
    req.user
        .addOrder()
        .then(() => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
}