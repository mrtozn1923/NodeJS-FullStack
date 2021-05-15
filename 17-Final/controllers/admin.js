const Product = require('../models/product');
const Category = require('../models/category');
const User = require('../models/user');

exports.getProducts = (req, res, next) => {
    Product
        .find({ userId: req.user._id })
        .populate('userId', 'name -_id')
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
            next(err);
        });
}
exports.getAddProduct = (req, res, next) => {

    Category.find()
        .then(categories => {
            res.render('admin/add-product', {
                title: 'Admin Panel-Ürün Ekleme',
                path: '/admin/add-product',
                inputs: {
                    name: "",
                    price: "",
                    imageUrl: "",
                    description: ""
                },
                categories: categories
            })
        })
        .catch(err => console.log(err));
}
exports.postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.file;
    const description = req.body.description;
    const ids=req.body.categoryids;

    Category.find()
        .then(categories => {
            if (!image) {
                res.render('admin/add-product', {
                    title: 'Admin Panel-Ürün Ekleme',
                    path: '/admin/add-product',
                    errorMessage: 'Lütfen resim seçiniz.',
                    inputs: {
                        name: name,
                        price: price,
                        imageUrl: image,
                        description: description
                    },
                    categories: categories
                });
            }

            const product = new Product({
                name: name,
                price: price,
                imageUrl: image.filename,
                description: description,
                userId: req.user,
                categories: ids,
            });
            product.save()
                .then(() => {
                    res.redirect('/admin/products');
                })
                .catch(err => {
                    if (err.name == 'ValidationError') {
                        let message = '';
                        for (field in err.errors) {
                            message += err.errors[field].message + "<br>";
                        }
                        res.render('admin/add-product', {
                            title: 'Admin Panel-Ürün Ekleme',
                            path: '/admin/add-product',
                            errorMessage: message,
                            inputs: {
                                name: name,
                                price: price,
                                imageUrl: image,
                                description: description
                            },
                            categories: categories
                        });
                    } else {
                        next(err);
                    }
                });
        });

}
exports.getEditProduct = (req, res, next) => {

    Product.findOne({ _id: req.params.productid, userId: req.user._id })
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            return product;
        })
        .then(product => {
            Category.find()
                .then(categories => {

                    categories = categories.map(category => {
                        if (product.categories) {
                            product.categories.find(item => {
                                if (item.toString() === category._id.toString()) {
                                    category.selected = true;
                                }
                            })
                        }

                        return category;
                    })

                    res.render('admin/edit-product', {
                        title: 'Admin Panel-Ürün Düzenleme',
                        path: '/admin/products',
                        product: product,
                        categories: categories
                    });
                })
        })
        .catch(err => next(err));
}

exports.postEditProduct = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const image = req.file;
    const description = req.body.description;
    const ids = req.body.categoryids;

    Product.findOne({ _id: id, userId: req.user._id })
        .then(product => {
            if (!product) {
                return res.redirect('/');
            }
            product.name = name;
            product.price = price;
            product.description = description;
            product.categories = ids;
            if (image) {
                product.imageUrl = image.filename;
            }
            return product.save();
        })
        .then(() => {
            res.redirect('/admin/products?action=edit');
        })
        .catch(err => next(err));
}

exports.postDeleteProduct = (req, res, next) => {
    const id = req.body.productid;

    Product.findOne({ _id: id, userId: req.user._id })
        .then(product => {
            if (!product) {
                return next(new Error('Silinmek istenen ürün bulunamadı'));
            }
            return Product.deleteOne({ _id: id, userId: req.user._id })
                .then((result) => {
                    if (result.deletedCount === 0) {
                        return next(new Error('Silinmek istenen ürün bulunamadı'));
                    }
                    //kullanıcıların sepetinden silinmeli
                    User.find()
                        .then(users => {
                            users.forEach(user => {
                                if (user.cart.items[0] != undefined) {
                                    user.cart.items.forEach(cartItem => {
                                        if (id.toString() === cartItem.productId.toString()) {
                                            //satıcının sileceği ürün müşterilerin sepetlerindeki
                                            //ürün ile eşleştiyse sepetlerden silinmeli
                                            user.deleteCartItem(cartItem.productId)
                                                .then(() => {
                                                    return res.redirect('/admin/products?action=delete');
                                                })
                                                .catch(err => next(err));
                                        }
                                    });
                                }
                            })
                        }).catch(err => next(err));
                }).catch(err => next(err));
        }).catch(err => next(err));
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
    const category = new Category({
        name: name,
        description: description
    });

    category.save()
        .then(() => {
            res.redirect('/admin/categories?action=create');
        })
        .catch(err => {
            if (err.name == 'ValidationError') {
                let message = '';
                for (field in err.errors) {
                    message += err.errors[field].message + "<br>";
                }
                res.render('admin/add-category', {
                    title: 'Admin Panel-Kategori Ekleme',
                    path: '/admin/add-product',
                    errorMessage: message,
                    inputs: {
                        name: name,
                        description: description
                    }
                });
            } else {
                next(err);
            }
        });
}

exports.getCategories = (req, res, next) => {

    Category.find()
        .then(categories => {
            res.render('admin/categories', {
                title: 'Kategoriler',
                path: '/admin/categories',
                categories: categories,
                action: req.query.action
            });
        })
        .catch(err => next(err));
}
exports.getEditCategory = (req, res, next) => {
    Category.findById(req.params.categoryid)
        .then(category => {
            res.render('admin/edit-category', {
                title: 'Kategori Düzenle',
                path: '/admin/categories',
                category: category
            });
        })
        .catch(err => next(err));
}

exports.postEditCategory = (req, res, next) => {

    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;

    Category.findById(id)
        .then(category => {
            category.name = name;
            category.description = description;
            return category.save();
        })
        .then(() => {
            res.redirect('/admin/categories?action=edit');
        })
        .catch(err => next(err));
}

exports.postDeleteCategory = (req, res, next) => {

    const id = req.body.categoryid;
    let categoryIndex = 0;

    Category.findByIdAndRemove(id)
        .then(() => {
            //Tüm ürünlerde silinen kategoriye ait ID bilgisi varsa silinmeli
            Product.find()
                .then(products => {
                    products.forEach(product => {
                        product.categories.forEach(categoryId => {
                            if (categoryId == id) {
                                categoryIndex = product.categories.indexOf(categoryId);
                                product.categories.splice(categoryIndex, 1);
                                product.save().then(() => {
                                    return;
                                }).catch(err => next(err));
                            }
                        })
                    })
                }).catch(err => next(err));
            res.redirect('/admin/categories?action=delete');
        })
        .catch(err => next(err));
}