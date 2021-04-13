//ES6
//Statik metodlar obje üzerinden değil sınıf üzerinden çağrılmaktadırlar. Kullanılmaları için obje oluşturmaya gerek yoktur.
//Bu tarz metodlar obje içerisindeki bilgilere ihtiyaç duyulmadığı zaman kullanılması mantıklıdır.

/*
class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
        return 2021-this.yearOfBirth;
    }
    static sayHi(){
        console.log('Hello there');
    }
}

let p1=new PersonES6("Mehmet","Muhasebeci",1993);
console.log(p1);
console.log(p1.calculateAge());
// p1.sayHi(); //hata verir
PersonES6.sayHi(); */

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y;

        return Math.hypot(dx,dy);
    }
}

const d1=new Point(10,10);
const d2=new Point(20,20);

console.log(Point.distance(d1,d2));
