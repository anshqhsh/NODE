import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// cookie-parser
// morgan
// cors
// helmet

// cookie-parser
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200, // for options request
  credentials: true, // Access-Control-Allow-Credentials: true
};
// 사용 하는 미들웨어
app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(morgan('common')); // http://expressjs.com/en/resources/middleware/morgan.html
app.use(cors(corsOptions));
app.use(helmet()); // https://github.com/helmetjs/helmet 보안 관련 헤더
// app.use(express.json()); // body를 보기위해 json을 등록 해줘야한다.

app.get('/', (req, res) => {
  console.log('req.body : ', req.body);
  console.log(req.cookies); // it will be undefined without cookie-parser
  console.log(req.cookies.yummy_cookie);
  res.send('Welcome!');
});

app.listen(8080);
