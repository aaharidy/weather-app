const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=752e9c4ea8e57c244909204f1e17d82e&query=34.0544,-118.2439';

request({ url: url, json: true }, function (error, response) {
    if (error) {
        console.log("Unable to connect weather sevices!");
    } else if (response.body.error) {
        console.log("Unable to find location");
    } else {
        console.log("It's currently " + response.body.current.temperature + " degrees out. You feels like " + response.body.current.feelslike);
    }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWhhcmlkeSIsImEiOiJja3F3cHc3eXYwcXBxMndvMXdtcGdpZGNmIn0.6Afj7pjj-GOcSXP-0K4d-A';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect location services!");
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location")
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude, longitude);
    }
})