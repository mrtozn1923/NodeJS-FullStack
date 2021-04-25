/*
const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{

});
server.listen(3000);
console.log('Listening port on 3000...');
*/
//----------------------TEXT
/*
const http=require('http');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.statusCode=200;
    res.statusMessage='OK';

    res.write('Merhaba');
    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');
*/

//-------------------JSON
/*
const http=require('http');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','application/json');
    res.statusCode=200;
    res.statusMessage='OK';

    res.write(JSON.stringify({name:'Mert',surname:'Özen'}));
    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');
*/
//---------------HTML
/*
const http=require('http');

const server=http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.statusMessage='OK';

    res.write('<html>');
    res.write('<head><title>Anasayfa</title></head>');
    res.write('<body><h1>NODE JS</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);
console.log('Listening port on 3000...');
*/


//----------------HTML File

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    fs.readFile('index.html', function(error, file) {
        if (error) {
            res.setHeader('Content-Type', 'text/plain');
            res.statusCode = 404;
            res.statusMessage = 'Nout Found';
            // res.write('Dosya bulunamadı.');
            res.end('Dosya bulunamadı.');
        }else{
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.statusMessage = 'OK';
            res.end(file);
        }
    });

});

server.listen(3000);
console.log('Listening port on 3000...');