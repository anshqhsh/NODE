const http = require('http'); // node http 모듈을 사용
// const http2 = require('http2'); //https 사용 됨  배포할때 변경
const fs = require('fs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

//req : request, res : response
const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log('url: ', req.url);
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    fs.createReadStream('./html/index.html').pipe(res);
  } else if (url === '/courses') {
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/not-found.html').pipe(res);
  }
});

server.listen(8080); //port : 8080 서버로 동작
