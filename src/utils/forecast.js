const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=752e9c4ea8e57c244909204f1e17d82e&query=' + encodeURIComponent(latitude + "," + longitude);

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback("Unable to connect weather sevices!", undefined);
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            const { weather_descriptions, temperature, precip } = body.current;
            callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degress out. There is a ' + precip + '% chance of rain.');
        }
    })
}

module.exports = forecast