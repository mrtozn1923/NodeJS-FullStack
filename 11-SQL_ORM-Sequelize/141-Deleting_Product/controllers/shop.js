const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.findAll(
        {
            attributes:['id','name','price','imageUrl'],
        })
        .then(products => {
            Category.findAll()
                .then(categories=>{
                    res.render('shop/index', {
                        title: 'Anasayfa',
                        products: products,
                        categories: categories,
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

    Product.findAll({
        attributes:['id','name','price','imageUrl']
    })
        .then(products => {
            Category.findAll()
                .then(categories=>{
                    res.render('shop/products', {
                        title: 'Ürünler',
                        products: products,
                        categories: categories,
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

    Product.findAll(
        {   
            //tüm kolonlar yerine sadece istediklerimizi verebiliriz
            attributes:['id','name','price','imageUrl','description'],
            where:{id:productId}
        })
        .then(products=>{
            res.render('shop/product-detail', {
                title: products[0].name,
                product: products[0],
                path: '/products'
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    /*
    //Sadece id üzerinden bir filtreleme için aşağıdakiler yeterli
    Product.findByPk(productId)
        .then((product) => {
            res.render('shop/product-detail', {
                title: product.name,
                product: product,
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });*/

    
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