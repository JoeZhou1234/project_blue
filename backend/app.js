import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'

const PORT = 3000
const app = express()
// Simple homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Project Blue!');
});

app.listen(PORT, (err) => {
  if (err) console.log(err)
  else console.log('HTTP server on http://localhost:%s', PORT)
})