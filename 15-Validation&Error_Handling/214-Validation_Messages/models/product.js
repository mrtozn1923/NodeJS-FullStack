const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Ürün ismi girmelisiniz'],
        minlength:[5,'Ürün ismi için minimum 5 karakter girmelisiniz.'],
        maxlength:[255,'Ürün ismi için maksimum 255 karakter girmelisiniz.']
    },
    price: {
        type: Number,
        required: [true,'Fiyat bilgisi girmelisiniz.'],
        min:[0,'Fiyat sıfırdan küçük olamaz.']
    },
    description: {
        type:String,
        required: [true,'Açıklama bilgisi girmelisiniz.'],
        minlength:[200,'Açıklama 200 karakterden az olamaz.']
    },
    imageUrl: {
        type:String,
        required:[true,'Ürün resmini atamalısınız.']
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true,'Kullanıcı kimliği ile ürün eşleştirilemedi.']
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
});

module.exports = mongoose.model('Product', productSchema);