// function fn(){
//     return Promise.resolve("merhaba");
// }

// fn().then(response=>console.log(response));

//------
//async ile işaretlenen fonksiyon geriye otomatik olarak promise objesi döndürür.
/*
async function fn(){
    return "merhaba"
}

console.log(fn());
fn().then(response=>console.log(response));
*/
var isError = false;

function getCategory() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isError) {
                resolve('phone');
            } else {
                reject('error')
            }
        }, 1000);
    });
}

function getProducts(category) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`5 products in ${category}`);
        }, 1000);
    });
}

getCategory()
.then(getProducts)
.then(res=>console.log(res))
.catch(err=>console.log(err));

//---async await kullanımı

async function getProduct() {
    try {
        let category = await getCategory(); //sonuç geldikten sonra aşağıya geçer.
        let result = await getProducts(category); //sonuç geldikten sonra aşağıya geçer.
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
}

getProduct();