function initMap() {

    // Map option
    var options = {
        center: {lat: 49.2827,lng:-123.1207 },
        zoom: 13
    }

    // New map
    map = new google.maps.Map(document.getElementById("map"), options);

    // Marker
    const marker = new google.maps.Marker({
        position: {lat: 49.2835, lng: -123.1153},
        map:map
    });

    // Info Window
    const detailWindow = new google.maps.InfoWindow({
        content: `<p>ClayLeaf Studio</p>`
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
    })
}