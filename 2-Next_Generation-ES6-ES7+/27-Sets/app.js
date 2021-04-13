//Sets (Collection-Unique Value)

let val;
var mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add('iki');
mySet.add({a:1,b:2});
//adres bilgileri farklı olduğu için objeler birden fazla eklenebilir

var obj={a:1,b:2};
mySet.add(obj);

// console.log(mySet);

// val=mySet.has(1);
// val=mySet.has(3);
// val=mySet.has(obj);

// val =mySet.size;
// console.log(val);
// console.log(mySet);
// mySet.delete(1);
// val =mySet.size;
// console.log(val);
// console.log(mySet);

//-----------------

// for(let item of mySet){
//     console.log(item);
// }
// //set için key ve value aynı değerlerdir

// for(let item of mySet.keys()){
//     console.log(item);
// }
// for(let item of mySet.values()){
//     console.log(item);
// }
// for(let [key,value] of mySet.entries()){
//     console.log(key,value);
// }

//Çevirme işleminden sonra dizi fonksiyonları kullanılabilir.
console.log(Array.from(mySet));

let mySet2=new Set([1,2,3,4]);
console.log(mySet2);

//intersect (kesişim)
// var intersect=new Set(Array.from(mySet).filter(x=>mySet2.has(x)));
// console.log(intersect);

var intersect=new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);

//difference (farkları)

var difference=new Set([...mySet].filter(x=>!mySet2.has(x)));
console.log(difference);