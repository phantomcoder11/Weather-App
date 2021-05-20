const wform = document.querySelector('form')
const search = document.querySelector('input')
const temp = document.getElementById('temp')
const city = document.getElementById('city')
const country = document.getElementById('country')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')
wform.addEventListener('submit',(e)=>{
   e.preventDefault()
   const location = search.value
    console.log(search.value)

    const url ='https://api.openweathermap.org/data/2.5/weather?q='+location+'&units=metric&appid=4f49ef6dba7e317857e115d190c5d2bc';
fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.message ){
            console.log(data.message)
            temp.textContent =''
            city.textContent = data.message
            country.textContent =''
            pressure.textContent=''
            humidity.textContent=''
        }
        
        else{
            console.log(data.main.temp)
            temp.textContent =data.main.temp+'°C'
            city.textContent = data.name + ', '
            country.textContent =data.sys.country
            pressure.textContent='Pressure : ' + data.main.pressure
            humidity.textContent='Humidity : ' + data.main.humidity
        }
        
    })
})
})

console.log("Helloooo")
fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
// const url ='https://api.openweathermap.org/data/2.5/weather?q=jorhat&units=metric&appid=4f49ef6dba7e317857e115d190c5d2bc';
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
    
//         console.log(data.main.temp)
//     })
// })