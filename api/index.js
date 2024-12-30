const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  // res.send('Hello World');
  res.json({ body: 'hail hydra' }); // use nodemon [fileName] to see changes
});

app.post('/api/transaction', (req, res) => {
  res.json(req.body);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});