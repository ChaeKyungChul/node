const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/html; charset=utf-8'
    });
    res.write('<h1>반갑습니다.</h1>');
    res.write('<p>node로 만든 http 서버입니다.</p>');
    res.end('<p>잘가~~</p>'); //끝나는곳

}).listen(5000, ()=>{
    console.log('5000번 포트에서 응답을 기다림.')
});