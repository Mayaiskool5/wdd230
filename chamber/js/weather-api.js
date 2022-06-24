const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=6951357f74ee5f077d105cea7a7a9c6af8

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector("#temperature").textContent = data.toFixed(0);
        let temp = (document)
    })



    function calculateWindChill() {
        var temp = document.getElementById("Temp").value;
        var wSpeed = document.getElementById("windSpeed").value;
        if ((temp <= 50) && (wSpeed > 3)) {
            var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
    
            windChill= Math.round(windChill);
            document.getElementById("windChill").innerHTML= windChill;
        } else {
            document.getElementById('windChill').innerHTML= "N/A";
        }
    
    }
    
    document.querySelector('#button').onclick = calculateWindChill;