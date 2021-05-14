const Product = require('./product')
const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'İsim alanı zorunludur.']
    },
    email: {
        type: String,
        //validator.js
        validate:[isEmail,'Geçersiz E-posta adresi.']
    },
    password:{
        type:String,
        required:[true,'Şifre alanı zorunludur.']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
});
userSchema.methods.addToCart = function(product) {
    const index = this.cart.items.findIndex(cp => {
        return cp.productId.toString() === product._id.toString();
    });
    const updatedCartItems = [...this.cart.items];
    let itemQuantity = 1;
    if (index >= 0) {
        //Ürün sepette zaten var.Adet arttırılacak.
        itemQuantity = this.cart.items[index].quantity + 1;
        updatedCartItems[index].quantity = itemQuantity;
    } else {
        //Ürün daha önce sepete eklenmemiş.Yeni eklenecek.
        updatedCartItems.push({
            productId: product._id,
            quantity: itemQuantity
        });
    }
    this.cart = {
        items: updatedCartItems
    }
    return this.save();
}
userSchema.methods.getCart = function() {
    const ids = this.cart.items.map(i => {
        return i.productId;
    });
    return Product
        .find({
            _id: {
                $in: ids
            }
        })
        .select('name price imageUrl')
        .then(products => {
            return products.map(p => {
                return {
                    name: p.name,
                    price: p.price,
                    imageUrl: p.imageUrl,
                    quantity: this.cart.items.find(i => {
                        return i.productId.toString() === p._id.toString()
                    }).quantity
                }
            });
        });
}

userSchema.methods.deleteCartItem = function(productid) {
    const cartItems = this.cart.items.filter(item => {
        return item.productId.toString() !== productid.toString()
    });
    this.cart.items=cartItems;
    return this.save();
}
userSchema.methods.clearCart = function() {
    this.cart={items:[]};
    return this.save();
}
module.exports = mongoose.model('User', userSchema);