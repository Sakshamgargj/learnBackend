// console.log('Learning start');

require ('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
// const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(process.env.PORT);
})

app.get('/register',(req,res)=>{
    res.send('<h1>Register Here</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})