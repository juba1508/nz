let stop_lat = -38.136944;
let stop_lng = 176.250833;
let zoom = 13;
let title = 'Rotorua';

const STOPS = ["Tongariro-Nationalpark", {
    title: "Rotorua",
    user: "juba1508",
    lat: "-38.136944",
    lng: "176.250833",
    Wikipedia: "https://de.wikipedia.org/wiki/Rotorua"
}, "Auckland"]
console.log(STOPS);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup(); 