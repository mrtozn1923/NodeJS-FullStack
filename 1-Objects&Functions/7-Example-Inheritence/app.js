//Person Constructor
function Person(name){
    this.name=name;
}

Person.prototype.introduce=function(){
    console.log('Merhaba ben '+this.name);
}

//Teacher Constructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
}

Teacher.prototype=Object.create(Person.prototype);
Teacher.prototype.constructor=Teacher;
Teacher.prototype.teach=function(){
    console.log(this.branch+" öğretiyorum.");
}

//Student Constructor
function Student(name,number){
    Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.studentNumber=function(){
    console.log('Benim öğrenci numaram:'+this.number);
}

//Headmaster Constructor
function Headmaster(name,branch){
    Teacher.call(this,name,branch);
}

Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;

Headmaster.prototype.shareTask=function(){
    console.log("Okulu yönetiyorum.");
}

let p1=new Person('Mert');
p1.introduce();

let t1=new Teacher('Mehmet','Coğrafya');
t1.introduce();
t1.teach();

let s1=new Student("Mesut","19");
s1.introduce();
s1.studentNumber();

let h1=new Headmaster("Tahir","Matematik");
h1.introduce(); //Person
h1.teach();  //Teacher
h1.shareTask(); //Headmaster