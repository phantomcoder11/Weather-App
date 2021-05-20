const request = require('request')
const geocode = require('./geocode')
geocode('delhi', (error,data)=>{
    if(error){

        console.log('Error',error)
    }
else
console.log(data)
})