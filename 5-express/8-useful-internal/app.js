import express from 'express';

const app = express();

// express.json -> REST API, body parse
// express.urlencoded -> HTML form html안에 데이터를 바디에 파싱 해줌(서버사이드렌더링)
// app.use(express.urlencoded({ extended: false }));  옵션을 전달 해주어야 함
// express.static

app.use(express.json());
app.post('/posts', (req, res) => {
  console.log(req.body);
  res.status(201).send('Thanks, Created');
});

const options = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};

app.use(express.static('public', options)); // pubic 폴더를 읽어 준다.
app.listen(8080);
