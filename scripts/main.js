
let response = document.querySelector("#city")
let getWeatherButton = document.querySelector("#getWeather")

getWeatherButton.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("button clicked")
})

// getWeatherButton.addEventListener("click", (e)=>{
//     onsubmit
// })



// function getWeather(city){
//     console.log();
// }

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=ea06151ad04f45dc92fc791d7638ea3b")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             console.log(data.main.temp);
//             let kelvin = data.main.temp

//             // convert to Celius
//             let degC = kelvin - 273.15
//             let degF = Math.floor(degC * 1.8 + 32)
//             console.log(`${degF} degrees F`);

//             let div = document.querySelector("div")

//             // div.innerHTML = `Current temperature in Houston is: ${degF} &#0176F`
//             div.textContent = `Current temperature in Houston is: ${degF} ºF`
//         })