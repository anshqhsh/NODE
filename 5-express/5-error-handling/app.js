import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

//외부에서 포작 할 수 없는 비동기 에러에서는 해당 콜백 함수 내에서 에러 처리를 해줘야한다.
app.get('/file1', (req, res) => {
  //동기적인 코드 일때 에러 처리
  try {
    const data = fs.readFileSync('/file.txt');
  } catch (error) {
    res.Status(404).send('File not found');
  }
  //비동기 코드 에러 처리
  fs.readFile('/file.txt', (err, data) => {
    if (err) {
      res.Status(404).send('File not found');
    }
  });
});

app.get('/file2', (req, res, next) => {
  // fsAsync.readFile('/file.txt').catch(next); // next에서 전달받은 인자(error)와 호출하는 인자가 같으면 생략가능 (err) => next(err)
  fsAsync
    .readFile('/file.txt')
    .catch(error => res.status(404).send('File not found'));
});

// async를 사용해주면 promise를 반환하며 미들웨어 마지막에 있는 에러에 잡히지 않는다.(비동기)
app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt'); //동기적인 코드(파일이 다 읽어 져야 변수에 할당이된다.)
  } catch {
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
