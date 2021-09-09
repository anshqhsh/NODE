const fs = require('fs');

const data = [];
fs.createReadStream('./file.txt', {
  //   highWaterMark: 8, //64kbytes
  //   encoding: "utf-8",
})
  .on('data', chunk => {
    data.push(chunk);
    //   console.log(chunk);
    console.count('data');
  })
  .on('end', () => {
    console.log(data.join('')); //배열의 문자열을 합침
  })
  .on('error', error => {
    console.log(error);
  });
