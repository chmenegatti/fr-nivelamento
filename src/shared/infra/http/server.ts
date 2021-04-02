import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(3535, () => {
  console.log('Server running on port 3535');
});
