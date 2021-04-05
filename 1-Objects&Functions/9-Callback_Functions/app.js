function MultipleByTwo(a,b,c,callback){
    let arr=[];
    if(callback && typeof callback==='function'){ 
        for(let i=0;i<3;i++){
            arr[i]=callback(arguments[i]*2);
        }
    }
    return arr;
}

function subtractTwo(element){
    return element-2;
}
//Fonksiyon Referansı ile Kullanım
console.log(MultipleByTwo(2,3,4,subtractTwo));
console.log(MultipleByTwo(2,3,4,10)); //şarta uymuyor

//Anonim Fonksiyon ile Kullanım
var result=MultipleByTwo(2,3,4,function(element){
    return element-2;
});
console.log(result);

