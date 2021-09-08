import express from 'express';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';

const app = express();

app.use(express.json()); //미들웨어

app.use('/users', userRouter); // 도메인이 큰 도메인이 2개
app.use('/posts', postRouter);

app.listen(8080);
