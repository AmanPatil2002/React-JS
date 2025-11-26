import express from 'express';
let app = express();
import cors from 'cors';
const PORT = 5000;

app.use(cors());

app.get('/api/energy', (req, res) => {
  const energyData = require('./data/energyData.json');
  res.json(energyData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
