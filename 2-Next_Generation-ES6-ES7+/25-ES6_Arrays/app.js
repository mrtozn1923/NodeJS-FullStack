const boxes=document.querySelectorAll(".box");
// console.log(boxes);
//ES5
let boxesES5=Array.prototype.slice.call(boxes);

// boxesES5.forEach(function(box){
//     box.style.backgroundColor='black';
// });

// console.log(boxesES5);

//ES6
// Array.from(boxes).forEach(box=>box.style.backgroundColor="orange");

//ES5
// for(let i=0;i<boxesES5.length;i++){
//     if(boxesES5[i].className=="box box-blue"){
//         continue;
//     }
//     boxesES5[i].textContent="Değiştirildi";
//     boxesES5[i].style.backgroundColor="orange";
// }

//ES6
// var boxesES6=Array.from(boxes);

// for(let box of boxesES6){
//     if(box.className=="box box-blue"){
//         continue;
//     }
//     box.textContent="Değiştirildi.";
//     box.style.backgroundColor="orange";
// }

//-------------

// let arr=Array.from("Mert Özen");
// console.log(arr);

const products=[
    {name:"Samsung S8",price:3000},
    {name:"Samsung S8",price:3000},
    {name:"Samsung S7",price:2000},
    {name:"Samsung S6",price:1000}
]
console.log(Array.from(products,prd=>prd.name=="Samsung S8"));
//Obje
console.log(products.find(prd=>prd.name=="Samsung S8"));
//Obje Dizisi
console.log(products.filter(prd=>prd.name=="Samsung S8"));

console.log(products.findIndex(prd=>prd.price==5000));

//-----------

let numbers=['a','b','c'];
//key,value
let entries=numbers.entries();

for(let i of entries){
    console.log(i);
}
//keys
let keys=numbers.keys();

for(let i of keys){
    console.log(i);
}
//values
let values=numbers.values();

for(let i of values){
    console.log(i);
}

