const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Ürün ismi girmelisiniz'],
        minlength:[5,'Ürün ismi için minimum 5 karakter girmelisiniz.'],
        maxlength:[255,'Ürün ismi için maksimum 255 karakter girmelisiniz.'],
        trim:true,
    },
    price: {
        type: Number,
        required: [true,'Fiyat bilgisi girmelisiniz.'],
        min:[0,'Fiyat sıfırdan küçük olamaz.'],
        get:value=>Math.round(value), //10.2=>10
        set:value=>Math.round(value) //10.8=>11
    },
    description: {
        type:String,
        required: [true,'Açıklama bilgisi girmelisiniz.'],
        minlength:[10,'Açıklama 10 karakterden az olamaz.']
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
        ref: 'Category',
        required:[true,'Lütfen en az 1 kategori seçiniz.']
    }]
});

module.exports = mongoose.model('Product', productSchema);