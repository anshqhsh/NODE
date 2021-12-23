import express from 'express';
const app = express();

app.use(express.json()); // post 를 사용하기 위해선 express에서 제공하는 미들웨어가 필요함

app.post('/', (req, res, next) => {
  console.log(req.body);
});

// 한 콜백에서 send를 여러번 할 수 없다.

// // all은 이 경로에 한에서만 모든 리퀘스트를 받는것 ex : http://localhost:8080/api/ddd (x)
// app.all('/api/*', (req, res, next) => {
//   console.log('all');
//   next();
// });
// // use는 경로를 추가 하더라도 항상 use가 호출이 됨
// app.use('/sky', (req, res, next) => {
//   console.log('use');
//   next();
// });

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('first');
//     if (true) {
//       return res.send('Hello'); // return을 통해 if문을 나가야한다.
//     }
//     // next('route');// 다음 미들웨어로 넘어감
//     res.send('joon'); // 처리를 하면 이후 미들웨어는 작동하지 않음 send, next를 통해 처리를 해줘야함
//   },
//   (req, res, next) => {
//     console.log('first2');
//     next();
//   }
// );

// app.get('/', (req, res, next) => {
//   console.log('second');
// });

// //처리할 수 없는 경로에 메세지를 띄워줌
// app.use((req, res, next) => {
//   res.status(404).send('Not available!');
// });

// // 에러핸들러가 필요함
// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later!');
// });
// app.get('/sky/:id', (req, res, next) => {
//   // console.log(req.path);
//   // console.log(req.headers);
//   console.log(req.params); // localhost:8080/sky/joon => {id : 'joon'}
//   console.log(req.params.id);
//   console.log(req.query); //http://localhost:8080/sky/joon/?keyword%20=%20bts keyword : bts
//   console.log(req.query.keyword);

//   // res.json({ name: 'joon' });
//   // res.sendStatus(400);

//   res.setHeader('key', 'value');
//   res.status(201).send('created');
// });
app.listen(8080);
