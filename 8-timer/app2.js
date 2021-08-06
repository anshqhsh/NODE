console.log('code1');

setTimeout(() =>{
    console.log('setTimeOut 0');
},0);

console.log('code2'); 

setImmediate(()=>{
    console.log('setImmediate');
})
console.log('code3');
//실행이 끝나고 가장 먼저 실행 
process.nextTick(()=>{
    console.log('process.nextTick');
});
