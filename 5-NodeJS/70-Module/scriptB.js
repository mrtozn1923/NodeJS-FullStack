//IIFE
/*var controllerB = (function() {
    //scope B
    //private
    var firstName = 'Mehmet';
    var age=18;
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

console.log(controllerA.firstName);
console.log(controllerB.firstName);
console.log(controllerA.log());
console.log(controllerB.log());
*/

//--------------------------------

const scriptA=require('./scriptA');

scriptA.log('Mehmet');
console.log(scriptA.name);
console.log(scriptA.age); //erişilemez
