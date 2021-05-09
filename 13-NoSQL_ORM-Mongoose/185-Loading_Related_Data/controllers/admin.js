const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    Product
        .find()
        .populate('userId','name -_id')
        .select('name price imageUrl userId')
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

    const product = new Product({
        name: name,
        price: price,
        imageUrl: imageUrl,
        description: description,
        userId:req.user
    });
    product.save()
        .then(() => {
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        });
}
exports.getEditProduct = (req, res, next) => {

    Product.findById(req.params.productid)
        .then(product => {
            res.render('admin/edit-product', {
                title: 'Admin Panel-Ürün Düzenleme',
                path: '/admin/products',
                product: product
            });
        })
        .catch(err => { console.log(err) });
}

exports.postEditProduct = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    //update first
    Product.update({_id:id},{
        $set:{
            name:name,
            price:price,
            imageUrl:imageUrl,
            description:description
        }
    })    
    .then(()=>{
        res.redirect('/admin/products?action=edit');
    })
    .catch(err=>console.log(err));
}
exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.productid;

    Product.deleteOne({_id:id})
        .then(() => {
            console.log('ürün silindi');
            res.redirect('/admin/products?action=delete');
        })
        .catch(err => console.log(err));
}

exports.getAddCategory = (req, res, next) => {
    res.render('admin/add-category', {
        title: 'New Category',
        path: '/admin/add-category'
    });
}

exports.postAddCategory = (req, res, next) => {

    const name = req.body.name;
    const description = req.body.description;
    const category = new Category(name, description);

    category.save()
        .then(() => {
            res.redirect('/admin/categories?action=create');
        })
        .catch(err => console.log(err));
}

exports.getCategories = (req, res, next) => {

    Category.findAll()
        .then(categories => {
            res.render('admin/categories', {
                title: 'Kategoriler',
                path: '/admin/categories',
                categories: categories,
                action: req.query.action
            });
        })
        .catch(err => console.log(err));
}
exports.getEditCategory = (req, res, next) => {
    Category.findById(req.params.categoryid)
        .then(category => {
            res.render('admin/edit-category', {
                title: 'Kategori Düzenle',
                path: '/admin/categories',
                category: category,
            });
        })
        .catch(err => console.log(err));
}

exports.postEditCategory = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const category = new Category(name, description, id);

    category.save()
        .then(() => {
            res.redirect('/admin/categories?action=edit');
        })
        .catch(err => console.log(err));
}