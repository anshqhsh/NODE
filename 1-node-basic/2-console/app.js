console.log('logging....');
console.clear();

//log(level)
console.log('log');     //개발 
console.info('info');   //정보
console.warn('warn');   //경보
console.error('error'); //에러, 사용자 에러, 시스템 에러 

//  assert 첫번째 요소가 false인 경우에만 출력 된다. 
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same'); 

// print object
const student = { name: 'joon', age: 20, company: { name: 'AC' }};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, color: false, depth: 2});

//시간이 얼마나 걸렸는지 확인 할 수 있다. 
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++
}
console.timeEnd('for loop');

//counting 호출 순서를 확인 가능 하다 .
function a(){
    console.count('a function');
}
a();
//카운트 리셋 
console.countReset('a function');
a();

// Trace
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1(); 
