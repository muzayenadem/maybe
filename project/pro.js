const express = require('express')
const pxl = express()
const allrout = require('./routes/rout')
const path = require('path')
pxl.set('view engine', 'ejs')
pxl.use(allrout)
pxl.get('/app',(req,res)=>{
    res.download(path.resolve(__dirname + '/picture/br.jpg'))
  })
pxl.listen(3000, ()=>{
    console.log('its working')
})




/*const express = require('express')
const pxl = express()
//const allrouter = require('./routes/rout.js')
//pxl.use(allrouter)
pxl.use('view engine', 'ejs')
pxl.get('/home',(req,res)=>{
    res.render('home',{
        title : ' our hompage'
    })
})
pxl.get('/about',(req,res)=>{
    res.render('about',{
        title : ' its about us'
    })
})
pxl.get('/contact',(req,res)=>{
    res.render('contact',{
        title : ' please if you have some troubrle'
    })
})
pxl.get('/login',(req,res)=>{
    res.render('login',{
        title : ' user hompage'
    })
})
pxl.listen(9000, ()=>{
    console.log('hfohduovr')
})*/