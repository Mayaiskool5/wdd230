function date() {
    const datefield = document.querySelector("#year");

    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
    
    datefield.innerHTML = `<em>${fulldate}</em>`; 
}

function mod() {

    document.querySelector('#year').innerHTML = (new Date().getFullYear());
    
    document.querySelector('#lastUpdate').innerHTML = ` - Mariah Wedel - Idaho - Last Updated: ${document.lastModified}`;

}