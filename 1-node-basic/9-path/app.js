//파일의 경로에 접근 가능한 모듈
const path = require('path');

console.log(__dirname);
console.log(__filename);

//경로 구분자
console.log(path.sep);
//환경 변수 구분자
console.log(path.delimiter);

//basename API
console.log(path.basename(__filename));
console.log(path.basename(__filename), '.js');

//dirname
console.log(path.dirname(__filename));

//extention
console.log(path.extname(__filename));

//parse 나눠서 사용도 가능
const parsed = path.parse(__filename);
console.log(parsed);

//경로를 스트링으로 변환
const str = path.format(parsed);
console.log(str);
// 절대 경로(true) | 상대경로
console.log('isAbsolute', path.isAbsolute(__dirname));
console.log('isAbsolute', path.isAbsolute('../'));

//normalize 경로가 이상하면 고쳐준다
console.log(path.normalize('./folder////sub'));

//join 쉽게 만들수 있음 PaTH를
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));
