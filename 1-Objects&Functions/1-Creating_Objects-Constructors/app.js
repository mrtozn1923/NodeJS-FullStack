//object literals

// let person={
//     name:'mert',
//     surname:'özen',
//     yearOfBirth:1990
// }
// console.log(person);
// console.log(person.name,person.surname,person.yearOfBirth);

//----------------

//function constructor (ES5)

// function Person(name,surname,yearOfBirth){
//     this.name=name;
//     this.surname=surname;
//     this.yearOfBirth=yearOfBirth;
//     // console.log(this);
//     this.calculateAge=function(){
//         return 2021-this.yearOfBirth;
//     }
// }
let Person=function(name,surname,yearOfBirth){
    this.name=name;
    this.surname=surname;
    this.yearOfBirth=yearOfBirth;
    // console.log(this);
    this.calculateAge=function(){
        return 2021-this.yearOfBirth;
    }
}

let person1=new Person('Mert','Özen',1990);
let person2=new Person('Mehmet','Özen',1993);

console.log(person1.name);
console.log(person1.calculateAge());
console.log(person2.name);
console.log(person2.calculateAge());