import express from 'express';
const app = express();

//http://localhost:8080/sky/joonhyuk joonhyuk 를 id로 사용 할 수 있다.
app.get('/sky/:id', (req, res, next) => {
  // console.log('path : ', req.path);
  // console.log('headers : ', req.headers);
  console.log('params : ', req.params);
  console.log(req.params.id);
  //http://localhost:8080/sky/joonhyuk/?keyword=bts = query :  { keyword: 'bts' }
  console.log('query : ', req.query);
  console.log(req.query.keyword);
  res.send('hi');
}); // 메소드를 이용
app.listen(8080);

//IP
//PORT 서버의 IP 주소 어떤 어플리케이션에 접속할지 알려 주는 것
