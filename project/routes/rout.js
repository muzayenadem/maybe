//const apiMiddleware = require('../middleware/middle')
const express = require('express')
const routs = express.Router()
const path = require('path')
routs.get('/',(req,res)=>{
    res.render('home' ,{
      title: 'homepage of website'
    })
})
routs.get('/about',(req,res)=>{
  res.render('about',{
      title : 'about website'
  })
 })
 routs.get('/contact',(req,res)=>{
  res.render('contact',{
      title : 'please contact us'
  })
 })
 routs.get('/login', (req,res)=>{
  res.render('login',{
    title : 'user hompage account'
  })
 })
 routs.get('/product', (req,res)=>{
  /*res.json([
    {
        name : ' muzayen adem' ,
        id : '1305305'
    },
    {
        name : ' sadik adem' ,
        id : '1305305'
    }
  ])*/
  res.render('product',{
    title : 'searhcbar about all product'
  })
 })
 module.exports = routs