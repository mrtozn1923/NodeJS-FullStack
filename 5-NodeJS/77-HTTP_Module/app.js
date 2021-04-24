//https://nodejs.org/dist/latest-v14.x/docs/api/http.html
/*
const http=require('http');

const server=http.createServer();

server.on('connection',function(){
    console.log('new connection');
});

server.listen(3000);
console.log('Listening port on 3000...');
*/
//app.js dosyasını nodejs üzerinde çalıştırdıktan sonra tarayıcıda 
//localhost:3000 yazdığınızda console penceresinde çıktıyı görüntüleyebilirsiniz.

//------------------------
/*
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
});


server.listen(3000);
console.log('Listening port on 3000...');
//Çıktı-> / GET
*/
//-----------------

const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Merhaba Dunya');
        res.end();
    }
    if(req.url==='/api/products'){
        res.write('product list');
        res.end();
    }
});

server.listen(3000);
console.log('Listening port on 3000...');

