function dir()
{
    let road = document.querySelector("#road").value;
    let city = document.querySelector("#city").value;
    window.open("https://www.google.ca/maps/dir/" + road + ", +" + city+"/Bayview+Secondary+School,+10077+Bayview+Ave,+Richmond+Hill,+ON+L4C+2L4")
} 
