const Product=require('../models/product');
const Category=require('../models/category');

exports.getProducts = (req, res, next) => {
    const products=Product.getAll();

    Product.getAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Panel-Ürünler',
                products: products[0],
                path: '/admin/products',
                action:req.query.action
            });
        })
        .catch((err)=>{
            console.log(err);
        });
}
exports.getAddProduct = (req, res, next) => {
    const categories=Category.getAll();
    res.render('admin/add-product', {
        title: 'Admin Panel-Ürün Ekleme',
        path: '/admin/add-product',
        categories:categories
    });
}
exports.postAddProduct = (req, res, next) => {
    const product=new Product();

    product.name=req.body.name;
    product.price=req.body.price;
    product.imageUrl=req.body.imageUrl;
    product.categoryid=req.body.categoryid;
    product.description=req.body.description;

    product.saveProduct();
    res.redirect('/admin/products');
}
exports.getEditProduct = (req, res, next) => {
    const categories=Category.getAll();

    Product.getById(req.params.productid)
    .then((product)=>{
        res.render('admin/edit-product', {
            title: 'Admin Panel-Ürün Düzenleme',
            path: '/admin/products',
            product:product[0][0],
            categories:categories
        });
    })
    .catch((err)=>{
        console.log(err);
    });
}
exports.postEditProduct = (req, res, next) => {
    const product=Product.getById(req.body.id);
    product.name=req.body.name;
    product.price=req.body.price;
    product.imageUrl=req.body.imageUrl;
    product.description=req.body.description;
    product.categoryid=req.body.categoryid;

    Product.Update(product);
    res.redirect('/admin/products?action=edit');
}
exports.postDeleteProduct=(req,res,next)=>{
    Product.DeleteById(req.body.productid);
    res.redirect('/admin/products?action=delete');
}