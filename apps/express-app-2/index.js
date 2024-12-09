const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => res.send('Hello World from App 2!'));

app.listen(port, () => {
  console.log(`App 2 listening at http://localhost:${port}`);
});
