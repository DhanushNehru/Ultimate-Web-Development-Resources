const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
       selectElement('header').classList.toggle('active');
});

// ... (previous code)

document.addEventListener("DOMContentLoaded", function () {
    const uttarakhandCenter = [21.146633, 79.088860];
    const map = L.map('map').setView(uttarakhandCenter, 8);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://maps.openweathermap.org/maps/2.0/radar/{z}/{x}/{y}?appid={API key}&tm={date}">OpenStreetMap</a> contributors'
    }).addTo(map);



    const dehradunCoordinates = [21.146633, 79.088860];
    const redIcon = L.icon({
        iconUrl: 'pin.png', // Replace with the actual path to your red pointer PNG
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    L.marker(dehradunCoordinates, { icon: redIcon }).addTo(map)
        .bindPopup('Dehradun, India')
        .openPopup();



    const dehradunCoordinates4 = [2.146633, 9.088860];
    L.marker(dehradunCoordinates4).addTo(map)
        .bindPopup('Nagpur, India')
        .openPopup();

    const rishikeshCoordinates = [18.516726, 73.856255];
    L.marker(rishikeshCoordinates).addTo(map)
        .bindPopup('Pune, India')
        .openPopup();

        const rishikeshCoordinates2 = [22.719568, 75.857727];
        L.marker(rishikeshCoordinates2).addTo(map)
            .bindPopup('Indore, India')
            .openPopup();
    
            const rishikeshCoordinates3 = [33.738045, 73.084488];
        L.marker(rishikeshCoordinates3).addTo(map)
            .bindPopup('Indore, India')
            .openPopup();

    // Add event listener for form submission
    document.getElementById('location-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const selectedStation = document.getElementById('station').value;

        if (selectedStation === 'Mussoorie') {
            const mussoorieCoordinates = [30.4591, 78.0667];
            map.setView(mussoorieCoordinates, 12);
        }
    });
});

  