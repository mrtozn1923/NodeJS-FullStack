const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.findAll({
            attributes: ['id', 'name', 'price', 'imageUrl'],
        })
        .then(products => {
            Category.findAll()
                .then(categories => {
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
            attributes: ['id', 'name', 'price', 'imageUrl']
        })
        .then(products => {
            Category.findAll()
                .then(categories => {
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
    const model=[];

    Category.findAll()
        .then(categories => {
            model.categories=categories;
            const category = categories.find(i => i.id == categoryid);
            return category.getProducts();
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
        .catch(err=>console.log(err));

}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productid;

    Product.findAll({
            //tüm kolonlar yerine sadece istediklerimizi verebiliriz
            attributes: ['id', 'name', 'price', 'imageUrl', 'description'],
            where: { id: productId }
        })
        .then(products => {
            res.render('shop/product-detail', {
                title: products[0].name,
                product: products[0],
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(cart=>{
            return cart.getProducts()
                .then(products=>{
                    res.render('shop/cart', {
                        title: 'Alışveriş Sepeti',
                        path: '/cart',
                        products:products
                    });
                })
                .catch(err=>{console.log(err)})
        })
        .catch(err=>{
            console.log(err);
        });
}
exports.postCart = (req, res, next) => {
    
    const productId=req.body.productId;
    let quantity=1;
    let userCart;

    req.user.getCart()
        .then(cart=>{
            userCart=cart;
            return cart.getProducts()
                .then(products=>{
                   return cart.getProducts({where:{id:productId}});
                })
                .then(products=>{
                    let product;
                    if(products.length>0){
                        product=products[0];
                    }
                    if(product){
                        quantity+=product.cartItem.quantity;
                        return product;
                    }
                    return Product.findByPk(productId);
                })
                .then(product=>{
                    userCart.addProduct(product,{
                        through:{
                            quantity:quantity
                        }
                    })
                })
                .catch(err=>{console.log(err)});
        })
        .then(()=>{
            res.redirect('/cart');
        })
        .catch(err=>{
            console.log(err);
        });
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Siparişler',
        path: '/orders'
    });
}