const jwt = require('jsonwebtoken');

const secret = '!I#&@tUwFya68G4Hr!BvWmLsk@kwqfRS';

const token = jwt.sign(
  {
    id: 'joon', // payload = 데이터 전달시 토큰에 담고 싶은 정보를
    isAdmin: false,
  },
  secret,
  { expiresIn: 2 } // 토큰이 계속 유지 되기때문에 보안에 문제점이 있어 토큰의 유효시간을 줌
  //서버에 보관할 Secret Key
);

setTimeout(() => {
  jwt.verify(edited, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);
const edited =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Impvb24iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjQxMjk1NjAxLCJleHAiOjE2NDEyOTU2MDN9.EEz_ZkSzLgwp_inHSg2hto8EWMDAdZ8tiSQ3hixSTnY';

//한번 발행된 토큰은 변경하면 안된다.
console.log(token);
