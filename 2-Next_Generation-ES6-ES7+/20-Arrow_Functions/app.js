//Arrow Functions

//ES5
let welcomeES5=function(){
    console.log("Merhaba ES5");
}

welcomeES5();

//ES6
// let welcomeES6=()=>{
//     console.log("Merhaba ES6");
// }

//tek satır yazımı
let welcomeES6=()=>console.log("Merhaba ES6");

welcomeES6();

//Parametre Kullanımı ES5
let multiplyES5=function(x,y){
    return x*y;
}

console.log(multiplyES5(10,5));

//Parametre Kullanımı ES6

// let multiplyES6=(x,y)=>{
//     return x*y;
// }

//Tek satır kullanımı
let multiplyES6=(x,y)=>x*y;

console.log(multiplyES6(10,5));

//Object Literals

//ES5
let getProductES5=function(id,name){
    return{
        id:id,
        name:name
    }
}

console.log(getProductES5('1','Huawei PSmart'));

//ES6
let getProductES6=(id,name)=>(
    {
        id:id,
        name:name
    }
);

console.log(getProductES6('2','Iphone 8'));

//ES5 Map
const phones=[
    {name:'Iphone 8',price:3000},
    {name:'Iphone 7',price:2500},
    {name:'Iphone 6',price:2000},
    {name:'Iphone 5',price:1500},
];

let pricesES5=phones.map(function(phone){
    return phone.price;
});

console.log(pricesES5);

//ES6
let pricesES6=phones.map(phone=>phone.price);
console.log(pricesES6);

//Filtereleme ES5
const arr=[1,2,3,4,5,6,8,64,34,56];

let evenES5=arr.filter(function(a){
    return a%2==0;
});

console.log(evenES5);

//ES6
let evenES6=arr.filter(a=>a%2==0);
console.log(evenES6);