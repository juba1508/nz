var map = L.map('map').setView([-38.136944, 176.250833], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-38.136944, 176.250833]).addTo(map)
    .bindPopup('Rotorua')
    .openPopup(); 