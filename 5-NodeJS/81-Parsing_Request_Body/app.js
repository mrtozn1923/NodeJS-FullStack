const http=require('http');
const fs=require('fs');
const qs=require('querystring');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message">
                        <button type="submit">Save</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }
    if(url==='/log' && method==='POST'){

        const body=[];
        //body parsing (bodyParser module)
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk); //chunk.png
        });

        req.on('end',()=>{
            const bodyParsed=Buffer.concat(body).toString();
            // console.log(bodyParsed);
            const message=bodyParsed.split('=')[1];
            console.log(qs.parse(bodyParsed));
            fs.appendFileSync('message.txt',message);
        });

        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
});

server.listen(3000);
console.log('Listening port on 3000...');