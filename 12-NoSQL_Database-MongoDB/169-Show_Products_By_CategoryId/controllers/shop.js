const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {

    Product.findAll()
        .then(products => {
            Category.findAll()
                .then(categories=>{
                    res.render('shop/index', {
                        title: 'Alışveriş',
                        products: products,
                        path: '/',
                        categories:categories
                    });
                })
        })
        .catch((err) => {
            console.log(err);
        });

}
exports.getProducts = (req, res, next) => {

    Product.findAll()
        .then(products => {
            Category.findAll()
            .then(categories=>{
                res.render('shop/products', {
                    title: 'Ürünler',
                    products: products,
                    path: '/products',
                    categories:categories
                });
            })
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
        .catch(err=>console.log(err));

}
exports.getProduct = (req, res, next) => {

    Product.findById(req.params.productid)
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
exports.postCartItemDelete = (req, res, next) => {
    const productid=req.body.productid;

    req.user.getCart()
        .then(cart=>{
            return cart.getProducts({where:{id:productid}});
        })
        .then(products=>{
            const product=products[0];
            return product.cartItem.destroy();
        })
        .then(result=>{
            res.redirect('/cart');
        });
}

exports.getOrders = (req, res, next) => {
    req.user.getOrders({include:['products']})
        .then(orders=>{
            res.render('shop/orders', {
                title: 'Siparişler',
                path: '/orders',
                orders:orders
            });
        })
        .catch(err=>console.log(err));
}

exports.postOrder = (req, res, next) => {
    let userCart;
    req.user.getCart()
        .then(cart=>{
            userCart=cart;
            return cart.getProducts();
        })
        .then(products=>{
            return req.user.createOrder()
                .then(order=>{
                    order.addProducts(products.map(product=>{
                        product.orderItem={
                            quantity:product.cartItem.quantity,
                            price:product.price
                        }
                        return product;
                    }));
                })
                .catch(err=>{console.log(err)});
        })
        .then(()=>{
            userCart.setProducts(null);
        })
        .then(()=>{
            res.redirect('/orders');
        })
        .catch(err=>{
            console.log(err);
        });
}