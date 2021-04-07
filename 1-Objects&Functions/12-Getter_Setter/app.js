// const person={
//     firstName:'Mert',
//     lastName:'Özen',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     setFullName: function(value){
//         const parts=value.split(' ');
//         this.firstName=parts[0]; 
//         this.lastName=parts[1]; 
//     }
// }
// console.log(person.getFullName());
// person.setFullName("Tahir Tanyel");
// console.log(person.getFullName());

//-------------ES5 Get & Set-----
//Bir obje içerisindeki değerleri get ve set metodları ile yönetebiliriz.

//v1

// const person={
//     firstName:'Mert',
//     lastName:'Özen',
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set fullName(value){
//         const parts=value.split(' ');
//         this.firstName=parts[0]; 
//         this.lastName=parts[1]; 
//     }
// }

// Object.defineProperty(person,'age',{
//     value:40,
//     writable:true //false olursa sadece okunabilir olur.
// });

// person.age=45;

// console.log(person.fullName);
// person.fullName="Tahir Tanyel";
// console.log(person.fullName);
// console.log(person);
// console.log(person.age);

//v2

const person={
    firstName:'Mert',
    lastName:'Özen'
}

Object.defineProperty(person,'fullName',{
    get: function(){
        return `${this.firstName} ${this.lastName}`
    },
    set: function(value){
        const parts=value.split(' ');
        this.firstName=parts[0]; 
        this.lastName=parts[1]; 
    }
});

Object.defineProperty(person,'age',{
    value:40,
    writable:true //false olursa sadece okunabilir olur.
});

person.age=45;

console.log(person.fullName);
person.fullName="Tahir Tanyel";
console.log(person.fullName);
console.log(person);
console.log(person.age);