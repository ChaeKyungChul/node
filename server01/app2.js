const http = require('http');
const fs = require('fs').promises;

http
.createServer( async(req, res)=> {
    try{
        const data = await fs.readFile('./html/index.html');
        res.writeHead(200, {
            'Context-Type' : 'text/html; charset=utf-8'
        });
        res.end(data);
    }catch(err){
        console.error(err);
    }
})
.listen(5000, ()=>{
    console.log('5000번 포트에서 대기중입니다.');
});