const express = require('express')
const lp = express()
const https = require('https')
lp.get('/',(req,res)=>{
    const url = "https://www.y2mate.com/en458/download-youtube"
    https.get(url,(res)=>{
   
        res.on('data',(data)=>{
            const thisLinkData = JSON.parse(data)
         //   console.log(data)
        })
    })
    res.send('you can see your data of the link that you entered on the server')
})
lp.listen(4000,()=>{
    console.log('maybe wow wow wow ')
})