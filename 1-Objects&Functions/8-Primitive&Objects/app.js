/*ilkel veri tiplerinde veriler direkt olarak tutulur.
  Objelerde(referans türler) ise heap üzerindeki adresler tutulur.
*/
var a=10;
var b=a;

console.log(a);
console.log(b);

var obj1={
    name:'Mert',
    age:30
}

var obj2=obj1;
obj1.age=32;

console.log(obj1.age);
console.log(obj2.age);

//-----------------------------
console.log("-----------------------------");

var num=50;
var account={
    name:"Mehmet",
    accountNumber:'1234568'
}
function update(a,b){ 
    a=100;
    b.accountNumber='8654321'
}
update(num,account); 
//num değişkeni ilkel veri tipi olduğu için sadece değer atandı. Fonksiyon içerisindeki atamadan dolayı "num" değişkeni değişmedi.

//account bir obje olduğu için göderilen parmetrede adres oldu.Bu adres ile erişilen objenin içeriği değiştirildiği için kalıcı oldu.
console.log(num);
console.log(account);


