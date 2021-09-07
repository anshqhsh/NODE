import express, { response } from 'express';
const app = express();

//app.all 에서는 쓰여진 url만 처리
app.all('/api/*', (req, res, next) => {
  console.log('all');
  next();
});

//use는 all과 다르게 url 이후까지 처리 가능
app.use('/sky', (req, res, next) => {
  console.log('use');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('first');
    if (true) {
      return res.send('Hello'); // 한 콜백 함수에서 두번 send를 보내면 에러 return을 이용해 콜백을 나가야함
    }
    res.send('joon');
    // next('route'); // 다음 경로로 넘어감 route설정하면 그냥 넘어감
    // next(new Error('error')); // 에러 처리
  },
  (req, res, next) => {
    console.log('first2');
  }
);
app.get('/', (req, res, next) => {
  console.log('second');
});

app.use((req, res, next) => {
  res.status(404).send('Not avilable!@_@');
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('Sorry, try later!');
}); // 어플 마지막엔 에러 처리를 해줘야함

app.listen(8081);
