const fs=require('fs');
const qs=require('querystring');

const routeHandler=(req,res)=>{
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
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
    
        req.on('end',()=>{
            const bodyParsed=Buffer.concat(body).toString();
            const message=bodyParsed.split('=')[1];
            fs.appendFileSync('message.txt',message);
        });
    
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
}


module.exports=routeHandler;
