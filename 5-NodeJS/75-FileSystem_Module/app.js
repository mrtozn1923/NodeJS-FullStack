//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html

const fs=require('fs');

//Eğer dosya işlemleri tamamlanmadan diğer kodlara geçilmesin istiyorsanız
//Sync ekli olan fonksiyonlar kullanılabilir.
// const files=fs.readdirSync('./',function(){
// });

//İşlemlerin asenkron olarak ilerlemesini istiyorsanız.
//sync ekli olan fonksiyonları kullanmamanız gerekir.
/*
const files=fs.readdir('./',function(error,data){

    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});*/
/*
const data=fs.readFile('index.html','utf8',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});*/
/*
fs.writeFile('deneme.txt','Merhaba',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('dosya oluşturuldu');
    }
});*/

//Tekrar dosya oluşturma işlemi gerçekleştirildiğinde önceki veriler kaybolmasın
//üstüne eklensin istiyorsanız appendFile kullanılabilir.
/*
fs.appendFile('deneme2.txt','Merhaba...',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('dosya oluşturuldu');
    }
});*/

//Silme işlemi
/*
fs.unlink('deneme2.txt',function(error){
    console.log('dosya silindi');
});
*/
//Dosya adını değiştirme
/*
fs.rename('deneme.txt','deneme1.txt',function(error){
    console.log('dosya ismi değiştirildi.');
});
*/



