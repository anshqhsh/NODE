import express from 'express';
const app = express();

//http://localhost:8080/sky/joonhyuk joonhyuk 를 id로 사용 할 수 있다.
app.get('/sky/:id', (req, res, next) => {
  // console.log('path : ', req.path);
  // console.log('headers : ', req.headers);
  console.log(req.params);
  console.log(req.params.id);
  //http://localhost:8080/sky/joonhyuk/?keyword=bts = query :  { keyword: 'bts' }
  console.log('query : ', req.query);
  console.log(req.query.keyword);

  // res.json({ name: 'joonhyuk' });
  // res.json({name : joon});
  // res.sendStatus(400);
  res.status(201).send('created');
  res.setHeader('key', 'value'); // header에 필여한 것을 세팅
}); // 메소드를 이용
app.listen(8081);

//IP
//PORT 서버의 IP 주소 어떤 어플리케이션에 접속할지 알려 주는 것
