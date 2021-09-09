const fs = require('fs') //vscode 가 node를 인식 함 

console.log(global);

global.hello = () =>{
    global.console.log('hello')
}

global.hello();
hello();
