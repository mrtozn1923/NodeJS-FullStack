//https://nodejs.org/dist/latest-v14.x/docs/api/url.html

const url=require('url');

const address='http://mertozen.com/kurslar?year=2021&month=nisan';

//Legacy API-Deprecated
// const myURL =url.parse(address);

//WHATWG API
const myURL=new URL(address);

console.log(myURL);
console.log(myURL.href);
console.log(myURL.origin);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.search);
console.log(myURL.searchParams);


