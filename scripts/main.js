
let getWeatherForm = document.querySelector("#getWeatherForm")
let city = document.querySelector("#city")
let weatherContainer = document.querySelector("#weatherContainer")

function createWeatherReport(classStyle, textContent=""){
    let div = document.createElement("div")

    div.setAttribute("class", classStyle)
    div.textContent = textContent
    weatherContainer.append(div)
}

getWeatherForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(city.value);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=ea06151ad04f45dc92fc791d7638ea3b`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.main.temp);
            let temp = Math.floor(data.main.temp)
            let feelsLike = Math.floor(data.main.feels_like)
            let maxTemp = Math.floor(data.main.temp_max)
            let minTemp = Math.floor(data.main.temp_min)
            let humidity = data.main.humidity
            let pressure = data.main.pressure
            let description = data.weather[0].description
            let windSpeed = Math.floor(data.wind.speed)
            let windGusts = Math.ceil(data.wind.gust)
            if(weatherContainer.innerHTML != ""){
                weatherContainer.innerHTML = ""
            }
            createWeatherReport("h2 text-decoration-underline py-3", `Weather in ${city.value}:`) // div for current city
            createWeatherReport("h5 py-1 text-capitalize", `${description}`)
            createWeatherReport("h5 py-1", `Temperature: ${temp} ºF`) // div for current temp
            createWeatherReport("h5 py-1", `Feels like: ${feelsLike} ºF`) // div for feels_like temp
            createWeatherReport("h5 py-1", `Max Temperature: ${maxTemp} ºF`) // div for max temp
            createWeatherReport("h5 py-1", `Min Tempertaure: ${minTemp} ºF`) // div for min temp
            createWeatherReport("h5 py-1", `Humidity: ${humidity}%`) // div for humidity
            createWeatherReport("h5 py-1", `Pressure: ${pressure} hPa`) // div for pressure
            createWeatherReport("h5 py-1", `Wind Speed: ${windSpeed} mph with gusts up to ${windGusts} mph`) // div for wind speed
        })
})


