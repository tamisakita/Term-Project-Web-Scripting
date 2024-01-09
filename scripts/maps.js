// This function will display the map
function initMap() {
  // With map options I set where I want to show on google maps with lat and lng values
  // How close I want to show it with zoom
  // And I added the map_styles to make it gray scale colors
  var options = {
    center: { lat: 49.2827, lng: -123.1207 },
    zoom: 13,
    styles: map_styles,
  };

  // Creating a new map on the specific tag tava have the id map
  // Where I used new google.maps.Map to create a new instance of the class Map and document.getElementById("map") to select the tag on the DOM
  // Finally I add the options for the map configurations
  map = new google.maps.Map(document.getElementById("map"), options);

  // I created a variable marker that creates a new instance of the class Marker to add a marker on the location to the map
  const marker = new google.maps.Marker({
    position: { lat: 49.2835, lng: -123.1153 },
    map: map,
  });

  // I created a variable detailWindow that creates a new instance of the class InfoWindow to show the p tag when I hover the marker on the google maps
  const detailWindow = new google.maps.InfoWindow({
    content: `<p>ClayLeaf Studio</p>`,
  });

  // Added a event mouseover to show the detailWindow on the marker
  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  });
}

// Saved the styles of the map in a variable to use it on the options
const map_styles = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#dedede",
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36,
      },
      {
        color: "#333333",
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#f2f2f2",
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];

// Initialized the function initMap that should be called when the Google Maps API is ready
window.initMap = initMap;
