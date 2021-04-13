//ES5

var PersonES5=function(name,job,yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
}

PersonES5.prototype.calculateAge=function(){
    return 2021-this.yearOfBirth;
}

var p1=new PersonES5("Mert","Bilgisayar Mühendisi",1990);
console.log(p1);
console.log(p1.calculateAge());


//ES6

class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
        return 2021-this.yearOfBirth;
    }
}

let p2=new PersonES6("Mehmet","Muhasebeci",1993);
console.log(p2);
console.log(p2.calculateAge());