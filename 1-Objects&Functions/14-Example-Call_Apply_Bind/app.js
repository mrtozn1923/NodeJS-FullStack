//Numeric Range

var num={
    min:0,
    max:150,
    checkNumericRange:function(value){
        if(typeof value!=='number'){
            return false;
        }else{
            return value>=this.min&&value<=this.max;
        }
    }
}
//varsayılan olarak 0-150 arasında kontrol gerçekleştirilir
console.log(num.checkNumericRange(30));
console.log(num.checkNumericRange(-40));

var num1={min:40,max:65}; //aralık bildiriliyor
console.log(num.checkNumericRange.call(num1,55));
console.log(num.checkNumericRange.apply(num1,[50]));

var checkNumber=num.checkNumericRange.bind(num1);
console.log(checkNumber(48));