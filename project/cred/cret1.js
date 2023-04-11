const express = require('express')
const path = require('path')
const dh = express()
dh.use(express.urlencoded())
dh.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname + '/cret.html'))
})
dh.post('/',(req,res)=>{
    const inf = req.body.cityN
    if (inf == ''){
        console.log('no no no ')
    }else
    console.log('welcome ' + inf)
})
dh.listen(5000,()=>{
    console.log('wow wow wow')
})







/*const express = require('express')
const app = express()
const https= require('https')
const path = require('path')
const weth = require('./cret3')
const fs = require('fs')
app.get('/',(req,res)=>{
    //by changing the link billow we can access any of information link
  const url = " https://www.bing.com/search?q=corsera&cvid=4a203d2b947e42ce96c5d3a7b1e2f705&aqs=edge..69i57.6602j0j4&FORM=ANAB01&PC=EDGEDBB"
   https.get(url, (response)=>{
response.on('data' ,(data)=>{
        const info = JSON.parse(data)
        console.log(info)
       })
   })
   res.send(' <h1 style="text-align:center; color:green">i want to be full stack developer</h1>')
})
app.listen(7000,()=>{
   console.log('life system')
})*/