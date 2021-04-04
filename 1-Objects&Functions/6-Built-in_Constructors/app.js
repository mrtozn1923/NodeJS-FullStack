//String
var str1 = 'Mert';
var str2 = new String('Mehmet');

console.log(str1);
console.log(typeof str1); //string
console.log(str2);
console.log(typeof str2); //object
//string===string
if (str1 === 'Mert') {
    console.log('eşit');
} else {
    console.log('eşit değil');
}
//obje!==string
if (str2 === 'Mehmet') {
    console.log('eşit');
} else {
    console.log('eşit değil');
}
//tip kontrolü yok sadece içerik kontrolü var
if (str2 == 'Mehmet') {
    console.log('eşit');
} else {
    console.log('eşit değil');
}

//-------Number------
var num1=10; //number
var num2=new Number(10); //object

//-------Boolean------
var bool1=true; //boolean
var bool2=new Boolean(true); //object

//---------Object------
var obj1={ //object
    name:'mert'
}
var obj2=new Object({ //object
    name:'mert'
});

//-------Array-----------
var arr1=['mert','mehmet','mesut']; //object
var arr2=new Array('mert','mehmet','mesut'); //object

//--------Prototype Genişletme----------------
String.prototype.repeat=function(n){
    return new Array(n+1).join(this);
}

console.log('mert'.repeat(3));

Array.prototype.remove=function(member){
    var index=this.indexOf(member);
    if(index>-1){
        this.splice(index,1);
    }
    return this;
}
console.log(arr1.remove('mert'));

//Eğer ileride Javascript içerisinde remove adında bir metod oluşturulursa kendi yazdığınız fonksiyonun ezmemesi için kontrol etmekte fayda var.

Array.prototype.remove=Array.prototype.remove || function(member){
    var index=this.indexOf(member);
    if(index>-1){
        this.splice(index,1);
    }
    return this;
}
console.log(arr1.remove('mehmet'));
