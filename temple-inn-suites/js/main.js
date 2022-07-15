const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
] ;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
] ;

let currentDate = new Date() ;
let lastModification = document.lastModified ;
let day = currentDate.getDay() ;
let dayName = days[ day ] ;
let month = months[ currentDate.getMonth() ] ;
let year = currentDate.getFullYear() ;

document.getElementById( "lastupdate" ).textContent = lastModification ;
document.getElementById( "year" ).textContent = year ;
document.getElementById( "date" ).textContent = `${dayName}, ${day} ${month} ${year}`

if (dayName == "Monday" || dayName == "Tuesday") {
    document.querySelector("#banner").textContent = "🤝🏼 Please join us for Temple Prep Wednesday at 7pm!";
}

var dateNow = Date.now();
var hidden = document.querySelector("#hiddenField");
hidden.value = dateNow;