import express from 'express';

const app = express();

app.use(express.json());

//라우트를 이용하면 체이니이 가능
app
  .route('/posts')
  .get((req, res) => {
    res.status(201).send('GET: /posts');
  })
  .post((req, res) => {
    res.status(201).send('POST: /posts');
  });

app
  .route('/posts/:id')
  .put((req, res) => {
    res.status(201).send('PUT: /posts/:id');
  })
  .delete((req, res) => {
    res.status(201).send('DELETE: /posts/:id');
  });

app.listen(8080);
