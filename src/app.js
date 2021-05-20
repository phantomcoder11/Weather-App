const path = require('path')
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const app = express();
const publicdirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
//Setup Handlebars and view location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//Setup static directory to server
app.use(express.static(publicdirectory))

var names = 'Weather App'
app.get('',(req,res)=>{
    res.render('index')
})



app.get('/forecast',(req,res)=>{
if(!req.query.search){
    return res.send({
        error : 'THERE IS NO SEARCH TERM'
    })
}

geocode(req.query.search,(error,data)=>{
    if(error){
        return res.send({
            error
        })
    }
    res.send({
        forecast : data,
        address : req.query.search
    })
})
    // console.log(req.query.search)
    // res.send({
    //     products:[],
    //     answer : req.query.search

    // })
})




app.get('*',(req,res)=>{
    res.send('This is a 404 page')
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})
console.log(__dirname)
console.log(__filename)