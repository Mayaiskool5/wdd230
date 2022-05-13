
const datefield = document.querySelector("#year");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector('#lastUpdate').innerHTML = ` - Mariah Wedel - Idaho - Last Updated: ${document.lastModified}`;
