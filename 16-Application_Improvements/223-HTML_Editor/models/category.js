const mongoose=require('mongoose');
categorySchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Kategori adı zorunlu']
    },
    description:{
        type:String,
        required:[true,'Kategori açıklaması zorunlu']
    }
});

module.exports=mongoose.model('Category',categorySchema);