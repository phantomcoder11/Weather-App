const request = require("request");
//URL : https://api.openweathermap.org/data/2.5/weather?q=jorhat&units=metric&appid=4f49ef6dba7e317857e115d190c5d2bc
  


// const url = "https://api.openweathermap.org/data/2.5/weather?q=silchr&units=metric&appid=4f49ef6dba7e317857e115d190c5d2bc";

// request({url : url, json:true}, (error,response)=>{
//     // const data = JSON.parse(response.body);
//     // console.log(data);
//     if(error){
//         console.log("There is an error");
//     }
//     else if(response.body.message){
//         console.log(response.body.message);
//     }
//     else
//     console.log(response);
// })
const geocode = (address, callback) =>{
   const url = "https://api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent(address)+"&units=metric&appid=4f49ef6dba7e317857e115d190c5d2bc";
   request({url: url, json:true}, (error,response) =>{
       if(error){
           callback('There is an error',undefined)
       }
       else if(response.body.message){
           callback(response.body.message)
       }
       else
       callback(undefined,'The temperature of '+ address+ ' is '+ response.body.main.temp)
   })
}
module.exports = geocode
// geocode('delhi', (error,data)=>{
//     if(error){

//         console.log('Error',error)
//     }
// else
// console.log(data)
// })