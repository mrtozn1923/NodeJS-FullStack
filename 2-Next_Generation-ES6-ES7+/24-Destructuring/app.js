//Destructuring

//Destructuring assignment
// var a,b,rest;

// [a,b]=[10,20];
// console.log(a);
// console.log(b);

// [a,b,...rest]=[10,20,30,40,50,60];
// console.log(a);
// console.log(b);
// console.log(rest);

// ({a,b}={a:10,b:20});
// console.log(a);
// console.log(b);

// ({a,b,...rest}={a:10,b:20,c:30,d:40});
// console.log(a);
// console.log(b);
// console.log(rest);

//Array destructuring

// const arrConfig=['localhost','8080','900'];

//ES5
// var server=arrConfig[0];
// var port=arrConfig[1];
// var timeout=arrConfig[2];

// console.log(server,port,timeout);

//ES6
// const [server,port,timeout]=arrConfig;
// console.log(server,port,timeout);

//Object destructuring

const objConfig={
    server:'localhost',
    port:'8080',
    timeout:900
}
// var server=objConfig.server;
// var port=objConfig.port;
// var timeout=objConfig.timeout;

// const {server,port,timeout}=objConfig;

// console.log(server,port,timeout);

// let {timeout:t}=objConfig;
// console.log(t);

//varsayılan değer atama
// let {server,port,timeout=800}=objConfig;
// console.log(server,port,timeout);

const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
const [,,wed,,fri]=days;
console.log(wed,fri);