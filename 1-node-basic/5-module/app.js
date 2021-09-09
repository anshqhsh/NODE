//사용하는 곳에서 require로 가져올수 있고 내부의 count 변수를 숨길수 있다. 
import {increase, getCount} from './counter.js';
// import * as counter {increase, getCount} from './counter.js';

increase();
increase();
increase();
increase();

// counter.increase();
// counter로도 사용 가능 

console.log(counter.getCount())