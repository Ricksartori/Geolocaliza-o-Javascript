let h2 = document.querySelector('h2');
function sucess(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
h2.textContent = `Latitude:${pos.coords.latitude}, Longitude${pos.coords.longitude}`;
}
function error(err){
    console.log(err);
}
var watchID = navigator.geolocation.watchPosition(sucess, error);
//navigator.geolocation.clearWatch(watchID);