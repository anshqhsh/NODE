const http = require('http'); // node http 모듈을 사용
// const http2 = require('http2'); //https 사용 됨  배포할때 변경
const fs = require('fs');
const ejs = require('ejs');

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const name = 'joonHyuk';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'NODE' },
  { name: 'Front-end' },
];

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
    ejs
      .renderFile('./template/index.ejs', { name })
      .then(data => res.end(data));
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then(data => res.end(data));
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then(data => res.end(data));
  }
});

server.listen(8080); //port : 8080 서버로 동작
