//this keyword

// let list={
//     category:'Phone',
//     names:['Iphone 8','Samsung S8','IPhone 7'],
//     call:function(){
//         this.names.map(function(name){
//             console.log(`${this.category} ${name}`)
//         });
//     }
// }

// list.call(); 
//category undefined olur.
//Her fonksiyon kendi kapsayıcısını oluşturduğu için this ile category kullanılamaz.

//ES5 Çözümü
// let list={
//     category:'Phone',
//     names:['IPhone 8','Samsung S8','IPhone 7'],
//     call:function(){
//         var self=this;
//         this.names.map(function(name){
//             console.log(`${self.category} ${name}`)
//         });
//     }
// }
// list.call(); 

//ES6 Arrow Function Çözümü
let list={
    category:'Phone',
    names:['IPhone 8','Samsung S8','IPhone 7'],
    call:function(){
        this.names.map((name)=>{
            console.log(`${this.category} ${name}`);
        });
    }
}
list.call(); 
