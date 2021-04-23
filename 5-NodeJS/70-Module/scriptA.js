//IIFE
/*var controllerA=(function(){
    //scope A
    //private
    var firstName='Mert';
    var age=10;
    // console.log(firstName);
    var log=function(){
        console.log("deneme");
    }
    //public
    return{
        firstName,
        log
    }
})();
*/

//--------------------------------
//NODEJS
// console.log(module);

//private members
var age=24;

//public members
var firstName='Mert';
var log=function(name){
    console.log(name);
}

// module.exports.name=firstName;
// module.exports.log=log;

//tek bir çatı altında da toplayabiliriz

module.exports={
    name:firstName,
    log:log
}
//veya bir isimlendirme yapmadan da erişebiliriz.
// module.exports={
//     firstName,
//     log
// }