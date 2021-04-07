//Eğer sayfa ilk yüklendiğinde çalışmasını istediğiniz bir fonksiyon varsa "Immediate Function" olarak tanımlayabilirsiniz.

//Normal Fonksiyon Tanımlaması
// function welcome(name){
//     var days=['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'];

//     var today=new Date();
//     var msg="Hoşgeldin "+name+".Bugün "+days[today.getDay()];

//     return msg;
// }

// console.log(welcome("Mert"));

//Immediate Function
(function(name) {
    var days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];

    var today = new Date();
    var msg = "Hoşgeldin "+name+".Bugün " + days[today.getDay()];

    console.log(msg);
}("Mert"));

