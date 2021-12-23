import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  //동기 처리시에는 try catch 문으로 가능 잡지 않아도 마지막에서 error 처리는 가능하다.
  // try {
  //   const data = fs.readFileSync('/file.txt');
  // } catch (error) {
  //   res.status(404).send('File not found');
  // }

  // 비동기 에러 처리는 미들웨어 내부에서 처리를 해야지(로딩스피너만 돌게됨) 미들웨어 중간에서 에러가 생성된 경우에는 마지막 에러처리가 불가능하다.
  fs.readFile('/file1.txt', (error, data) => {
    if (error) {
      res.status(404).send('File not found');
    }
  });
});

app.get('/file2', (req, res, next) => {
  fsAsync
    .readFile('/file.txt') //
    // .catch(next);
    .catch(error => res.status(404).send('File not found'));
});

//async는 프로미스를 반환함 async await를 사용했지만 await를 이용해 기다릴뿐 미들웨어는 프로미스를 반환한다. 마지막의 에러처리는 불가능하다.
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch (error) {
    res.status(404).send('File not found');
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
