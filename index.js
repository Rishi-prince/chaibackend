require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook',(req,res)=>{
    res.send('rishibhardwaj')
})
app.get('/facebook',(req,res)=>{
  res.send('rishibhardwaj')
})

app.get('/signup',(req,res)=>{
    res.send('<h1>please signup at chai or code...</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})