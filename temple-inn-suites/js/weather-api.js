const url = `https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=7ecaae4de1aaf5ac2d8bb0228207775c&units=imperial`

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            loadWeatherValues(data);
        } else {
            throw Error(await response.text());
        }
  
    } catch (error) {
        console.log(error);
    }
}

function loadWeatherValues(data) {
    var temp = document.getElementById("temp");
    var condition = document.getElementById("conditions");
    var humidity = document.getElementById("humidity");
    var wSpeed = document.getElementById("windSpeed");
    var iconPic = document.getElementById("weather-pic");
    iconPic.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    temp.textContent = data.main.temp.toFixed(0);
    humidity.textContent = data.main.humidity.toFixed(0);
    wSpeed.textContent = data.wind.speed.toFixed(0);
    condition.textContent = data.weather[0].description;

    calculateWindChill();
}

function calculateWindChill() {
    var temp = document.getElementById("temp").value;
    var wSpeed = document.getElementById("windSpeed").value;
    if ((temp <= 50) && (wSpeed > 3)) {
        var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

        windChill= Math.round(windChill);
        document.getElementById("windChill").innerHTML= windChill;
    } else {
        document.getElementById('windChill').innerHTML= "N/A";
    }

}