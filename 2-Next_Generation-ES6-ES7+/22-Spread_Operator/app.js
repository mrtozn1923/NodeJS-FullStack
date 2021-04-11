function getTotal(a,b,c){
    return a+b+c;
}

console.log(getTotal(10,20,30));

let numbers=[10,20,30];

//ES5
console.log(getTotal.apply(null,numbers));

//ES6-spread operator
console.log(getTotal(...numbers));

//-----------

let arr1=['two','three'];
let arr2=['one','four','five'];
let arr3=['one',...arr1,'four','five'];

arr1.push(...arr2); //sona ekler
console.log(arr1);
arr1.unshift(...arr2); //başa ekler
console.log(arr1);
console.log(arr3);


