const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'mock')));

let records = [];

app.post('/api/create', (req, res) => {
  const record = {
    id: Date.now(),
    name: req.body.name || 'Test Record',
  };
  records.push(record);
  return res.json(record);
});

app.get('/api/records', (req, res) => {
  res.json(records);
});

app.listen(3001, () => {
  console.log('Mock server running at http://localhost:3001');
});
