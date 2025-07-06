const express = require('express');
const app = express();
const port = 3001;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Привет с сервера Express!' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
}); 