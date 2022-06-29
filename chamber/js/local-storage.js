function lastVisited() {
    var todayDate = Date.now();
    var daysMil = 86400000;
    var dateBefore = parseInt(localStorage.getItem("lastVisit"));
    var difDates = ((todayDate - dateBefore) / daysMil).toFixed(0);
    var visit;

    if (!dateBefore) {
        visit = "This is your first Visit!";
    } else {
        visit = `It has been ${difDates} days since you visited this page.`
    }

    document.querySelector(".label").innerHTML = visit;

    localStorage.setItem("lastVisit", todayDate);

}

lastVisited()