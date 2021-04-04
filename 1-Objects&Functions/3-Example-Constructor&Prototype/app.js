function Employee(name,salary){
    if(!(this instanceof Employee)){
        return new Employee(name,salary);
    }
    this.name=name;
    this.salary=salary;
}

Employee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1;
    var tax=0;
    var total=this.salary*month;

    if(total<=20000){
        tax=total*0.2;
    }else if(total>20000&&total<=30000){
        tax=total*0.25;
    }else{
        tax=total*0.3;
    }

    return{
        tax:tax,
        paid:total-tax
    }
}

var emp1=new Employee('Mert',7000);
console.log(emp1);
console.log(emp1.calculateSalary());
var emp2=Employee('Mehmet',5000);
console.log(emp2);
console.log(emp2.calculateSalary());