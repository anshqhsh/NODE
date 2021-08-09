const fs = require("fs").promises;

//모든 코드는 비동기 이므로 순서가 중요하다면 .then을 사용해서 순서를 맞게 해줘야한다.
//API 인자를 항상확인

//read a file
fs.readFile("./text.txt", "utf8") //인코에 맞춰 출력 가능
  .then(data => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile("./text2.txt", "Hello, joon")
  .then(() => {
    // copy
    fs.copyFile("./text.txt", "./file22.txt").catch(console.error);
  })
  .catch(console.error);

//folder
fs.mkdir("sub-folder") //
  .catch(console.error);

//파일명 확인
fs.readdir("./") //
  .then(console.log)
  .catch(console.error);
