//사용하는 곳에서 require로 가져올수 있고 내부의 count 변수를 숨길수 있다. 
const counter = require('./counter');

counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount())