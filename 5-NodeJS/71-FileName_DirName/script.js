//Module yapısının arkaplandaki çıktısı yine IIFE yapısıdır.
/*(function(exports,require,module,__filename,__dirname){

    console.log(__filename);
    console.log(__dirname);

    var firstName="Mert";
    var log=function(name){
        console.log(name);
    }
    exports={
        firstName,
        log
    }

})();*/

//------------

console.log(__filename); //dosya adı ile tam yol verilir
console.log(__dirname); //dosya adı hariç tam yol verilir

var firstName="Mert";
var log=function(name){
    console.log(name);
}
exports={
    firstName,
    log
}
