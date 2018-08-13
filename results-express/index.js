const express = require('express');
const app = express();

app.listen(4000, ()=>{
  console.log('results is listening on port 4000');
})


app.get('/', (req,res,next)=>{
  res.send('Hello, Biscuits')
});
