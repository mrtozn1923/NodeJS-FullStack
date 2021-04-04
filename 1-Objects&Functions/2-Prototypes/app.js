// let Person=function(name,surname){
//     this.name=name;
//     this.surname=surname;
//     this.fullName=function(){
//         return this.name+" "+this.surname;
//     }
// }
// let person1=new Person("mert","özen");
// console.log(person1);
// console.log(person1.name);
// console.log(person1.surname);
// console.log(person1.fullName());

//Yukarıda her person örneği için fullName tekrar tekrar tanımlanır. Ancak aşağıdakinde bir kere tanımlanır ve diğer objeler tarafından kullanılır.

let Person=function(name,surname){
    this.name=name;
    this.surname=surname;
   
}
Person.prototype.fullName=function(){
    return this.name+" "+this.surname;
}
let person1=new Person("mert","özen");
console.log(person1);
console.log(person1.name);
console.log(person1.surname);
console.log(person1.fullName());
//Tüm objelerde ortak olarak kullanılabilen fonksiyon
console.log(person1.hasOwnProperty('name')); //true
console.log(person1.hasOwnProperty('fullName')); //false

