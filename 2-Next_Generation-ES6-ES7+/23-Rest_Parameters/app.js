//ES5

// function sum(){
//     console.log(arguments);
// }
// sum(10,20,30);

function sumES5(){
    let arr=Array.prototype.slice.call(arguments);
    let result=0;
    arr.forEach(function(item){
        result+=item;
    });
    return result;
}
console.log(sumES5(10,20,30));

//ES6

function sumES6(...arr){
    let result=0;
    arr.forEach(item=>result+=item);
    return result;
}

console.log(sumES6(10,20,30));

//--------

// function isDriver(...years){
//     years.forEach(year=>console.log(2018-year>=18));
// }
// isDriver(17,1980,2001,1994,2003);

function isDriver(age,...years){
    years.forEach(year=>console.log(2018-year>=age));
}
isDriver(17,1980,2001,1994,2003);