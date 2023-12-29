import Express from 'express';

const app = Express();

let counter = 0;

const pid = process.pid;
app.get('/', (req, res) => {
  res.send({ pid, counter: counter++ });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
