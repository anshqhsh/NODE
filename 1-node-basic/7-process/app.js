//node가 동작하는 process 정보를 볼 수 있음
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage);

//코드가 수행 후 x 초 있다가 setimeout안의 함수를 수행 한다
setTimeout(() => {
  console.log('set timeout')
},0);

//콜스텍(수행되는 코드)을 수행후 테스크 큐에 함수를 넣어 실행(테스크 큐에서 가장 먼저 실행)
process.nextTick(() => {
  console.log('nextTick')
})

for( let i = 0; i< 100; i++){
  console.log('for loop')
}