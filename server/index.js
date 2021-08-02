// Express App Setup
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// Express route handlers

app.get('/api/hello', async (req, res) => {
  res.send('Hello from Express Server')
});


app.listen(5000, () => {
  console.log('Express Server Listening ... ');
});
