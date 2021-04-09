//Call Apply Bind

// var welcome=function(){
//     console.log("Hoşgeldin "+this.name);
// }

// var person1={name:"Mert"};
// var person2={name:"Mehmet"};

// welcome.call(person1);
// welcome.call(person2);

// welcome.apply(person1);
// welcome.apply(person2);

//Yukarıda görüldüğü gibi bir fonksiyonu istenilen bir obje ile çalıştırmak için call ve apply kullanılabilir. Fonksiyon parametre almadığı için ikisi arasında bir fark yoktur.

// welcomePerson1=welcome.bind(person1);
// welcomePerson1();

//Bind ise mevcut fonsiyonu parametre olarak verilen obje ile ilişkilendirerek geriye fonksiyonun kopyasını döndürür.

//---------Parametre Kullanımı------------

var welcome=function(exam1,exam2){
    console.log("Hoşgeldin "+this.name+". 1.Sınav:"+exam1+" 2.Sınav:"+exam2);
}

var person1={name:"Mert"};
var person2={name:"Mehmet"};

welcome.call(person1,45,85);
welcome.call(person2,74,68);

welcome.apply(person1,[45,85]);
welcome.apply(person2,[74,68]);

//Aralarındaki tek fark parametre gönderim yöntemidir. Call metodu tek tek parametreleri alır. Apply metodu dizi şeklinde alır.

welcomePerson1=welcome.bind(person1);
welcomePerson1(45,85);