const { error } = require('console');
const fs = require('fs');

// 3가지 형태로 제공
// rename(....., callback) -> 비동기 
// !!!! try{renameSync(....)} catch(e){} -> 오류가 나면 오류메세지가 나오고 끝나기전까지 다음줄로 넘어가지 않음
// promise.rename().then().catch(0)

try{
    fs.renameSync('./text.txt', './text-new.txt')
}
catch(error){
    console.error(error);
}
console.log("hello")

//비동기 방식
fs.rename('./text.txt', './text-new.txt', (error)=>{
    console.log("error")
});
console.log("hello")

fs.promises
  .rename('./text2.txt', './text2-new.txt') //
  .then(() => console.log('Done'))
  .catch(console.error);