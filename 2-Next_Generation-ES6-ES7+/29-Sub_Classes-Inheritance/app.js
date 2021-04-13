//Sub Classes-Inheritance(Extend Keyword)

//ES5
/*
function PersonES5(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

PersonES5.prototype.sayHi=function(){
    return `Merhaba ben ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,username){
    PersonES5.call(this,firstName,lastName);
    this.phone=phone;
    this.username=username;
}

CustomerES5.prototype=Object.create(PersonES5.prototype);

var customer=new CustomerES5("Mert","Özen","1234567","mrtozn");
console.log(customer);
console.log(customer.sayHi());
*/

//ES6
class PersonES6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    sayHi(){
        return `Merhaba ben ${this.firstName} ${this.lastName}`;
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstName,lastName,phone,username){
        super(firstName,lastName);
        this.phone=phone;
        this.username=username;
    }
    static getTotal(){
        return 1000;
    }
}

let customer=new CustomerES6("Mehmet","Özen","123689","mhmt");
console.log(customer);
console.log(customer.sayHi());
console.log(CustomerES6.getTotal());