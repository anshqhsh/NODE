import express from 'express';
import cors from 'cors';

const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); //클라이언트에게 전달
//   //사용할 수 있는 메소드를 지정
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

//위의 것을 대체 옵션을 통해 특정한 도메인에서 만 설정되도록 옵션을 줘야 한다.

app.use(
  cors({
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200, //200자동 응답
    credentials: true, // Access-Control-Allow-Cresentials: true 헤더랑 같음
  })
);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(8080);
