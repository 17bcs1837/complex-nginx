const express = require('express')
const cors = require('cors')

const Fib = require('./fib')

const app = express()


app.use(cors())
app.use(express.json())

app.post('/worker/fib', (req, res) => {
  let x = parseInt(req.body.num);
  x = x*x;
  return res.json({val: x})
})

app.listen(2000, () => {
  console.log('Worker Listening on Port 2000 ... ')
})