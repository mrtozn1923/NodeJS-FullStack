// var products=[
//     {id:1,name:'Samsung S8',price:3000},
//     {id:2,name:'Samsung S7',price:2000},
//     {id:3,name:'Samsung S6',price:1000}
// ]

// function addProduct(prd){
//     setTimeout(() => {
//         products.push(prd);
//     }, 2000);
// }

// function getProducts(){
//     setTimeout(() => {
//         products.forEach(p=>{
//             console.log(p.name);
//         });
//     }, 1000);
// }

// addProduct({id:4,name:'Samsung S5',price:800});
// getProducts();

//Ekleme işlemi 2 saniye sürdüğü için yazdırma işleminde son eklenen elemanı göremedik. Eğer senkron yani birbiri ardınca çalışmasını istediğimiz durumda callback function yapısından faydalanabiliriz.

//-----------------------------

var products=[
    {id:1,name:'Samsung S8',price:3000},
    {id:2,name:'Samsung S7',price:2000},
    {id:3,name:'Samsung S6',price:1000}
]

function addProduct(prd,callback){
    setTimeout(() => {
        products.push(prd);
        callback();
    }, 2000);
}

function getProducts(){
    setTimeout(() => {
        products.forEach(p=>{
            console.log(p.name);
        });
    }, 1000);
}

addProduct({id:4,name:'Samsung S5',price:800},getProducts);
