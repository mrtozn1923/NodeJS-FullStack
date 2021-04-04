//Prototypal Inheritance (ES6 Öncesi)

let year=new Date();
year=year.getFullYear();

let Person=function(name,yearOfBirth){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
}

Person.prototype.calculateAge=function(){
    return 2021-this.yearOfBirth;
}

let Customer=function(name,yearOfBirth,customerNumber){
    Person.call(this,name,yearOfBirth);
    this.customerNumber=customerNumber;
}

//inherit
Customer.prototype=Object.create(Person.prototype);
//set customer constructor (yukarıda constructor da değişti)
Customer.prototype.constructor=Customer;

let customer1=new Customer("Mert",1990,"12345");

console.log(customer1);
console.log(customer1.constructor);//23.satır olmasaydı Person Constructor görüntülenirdi
console.log(customer1.name);
console.log(customer1.yearOfBirth);
console.log(customer1.calculateAge());