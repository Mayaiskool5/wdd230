const theDate = new Date();

const month = theDate.getMonth() + 1;
const day = theDate.getDate();
const year = theDate.getFullYear();

document.querySelector("#date").innerHTML = month + "." + day + "." + year