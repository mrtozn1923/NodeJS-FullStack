/*var p=new Promise(function(resolve,reject){
    if(true){
        resolve('success');
    }else{
        reject('failure');
    }
});

p.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
});
*/

new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
    return number*number;
}).then(function(number){
    console.log(number);
});


