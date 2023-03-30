let stop_lat = -38.136944;
let stop_lng = 176.250833;
let zoom = 13;
let title = 'Rotorua';

const STOPS = ["Tongariro-Nationalpark", "Rotorua", "Auckland"]
console.log(STOPS);
console.log(STOPS[0]);
console.log(STOPS[1]);
console.log(STOPS[2]);
console.log(STOPS.length);

let map = L.map('map').setView([stop_lat, stop_lng], zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([stop_lat, stop_lng]).addTo(map)
    .bindPopup(title)
    .openPopup(); 