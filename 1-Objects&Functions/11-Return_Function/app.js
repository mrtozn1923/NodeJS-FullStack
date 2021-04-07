//Bir fonksiyondan fonksiyon döndürme

function Question(hobby){

    switch(hobby){
        case 'car':
            return function(name){
                console.log(name+" bir araban var mı?");
            }
        break;

        case 'book':
            return function(name){
                console.log(name+" en sevdiğin kitap nedir?");
            }
        break;

        case 'software':
            return function(name){
                console.log(name+" Javascript biliyor musun?");
            }
        break;
        
        default:
            return function(name){
                console.log(name+" nasılsın?");
            }
    }
}

var carQuestion=Question("car");

carQuestion("Mert");

var bookQuestion=Question("book");

bookQuestion("Mehmet");

var softwareQuestion=Question("software");

softwareQuestion("Mesut");

var question=Question();

question("Tahir");