const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10); // 길이가 10개인 salt

console.log(password);
console.log(hashed);

const result = bcrypt.compareSync('abcd1234', hashed); // 비밀번호를 확인가능 /비동기로 짜는 것이 더 좋음

console.log(result);
