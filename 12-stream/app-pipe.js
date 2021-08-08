const fs = require('fs');
const zlib = require('zlib'); // 압축 라이브러리

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file4.zip');
const zlibStream = zlib.createGzip();
const piping = readStream.pipe(zlibStream).pipe(writeStream); // readStream의 데이터를 받아 압축 후 writestream으로 연결
piping.on('finish', () => {
  console.log('done!');
});

const http = require('http');
const server = http.createServer((req, res) => {
  // fs.readFile('file.txt', (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream('./file.txt');
  stream.pipe(res);
});
server.listen(3000);
