/*Var olan bir objenin proto kısmını yeni bir objenin
proto kısmına aktarmak(bağlamak)) için Object.create kullanılır.*/

let personProto={
    calculateAge:function(){
        return 2021-this.yearOfBirth;
    }
}

let person=Object.create(personProto);

person.name="mert";
person.surname="özen";
person.yearOfBirth=1990;

console.log(person);
console.log(person.calculateAge());

let person2=Object.create(personProto,{
    name:{value:'mehmet'},
    surname:{value:'özen'},
    yearOfBirth:{value:1993}
});

console.log(person2);
console.log(person2.calculateAge());