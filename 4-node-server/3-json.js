const http = require('http');

const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JS' },
  { name: 'NODE' },
  { name: 'Front-end' },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?, action?
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' }); // status Code 와 header(obj)를 넘길 수 있음
      res.end(JSON.stringify(courses)); //course 오브젝트를 json 형태로 보냄
    } else if (method === 'POST') {
      // 사용자가 클라이언트에서 데이터를 받아 새로운 코스를 만듦
      const body = [];
      //request 이벤트 덩어리를 받아서
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString(); // Buffer에 있는 바디를 String으로 변환
        const course = JSON.parse(bodyStr); // 오브젝트 형태로 parse
        courses.push(course);
        console.log('course? :', course);
        res.writeHead(201); // 서버는 응답을 해줘야함
        res.end();
      });
    }
  }
});

server.listen(8080);
