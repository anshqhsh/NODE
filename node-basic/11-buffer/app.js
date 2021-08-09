// bufer? - 고정된 사이즈의 메모리 덩어리
// array of integers, byte of data
// 메모리에 들어있는 데이터 형태로(byte)
const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //초기화하지 않음 (fast)
buf2[0] = 72;
buf2[1] = 105;

buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3);

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
