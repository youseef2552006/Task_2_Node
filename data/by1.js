const request = require("request")

const by1 = (city , callback) => {
const gocodeURl =
    "https://api.mapbox.com/search/geocode/v6/forward?q=" +
    city +
    "&access_token=" + process.env.MAPBOX_TOKEN;
    request({url : gocodeURl , json : true} , (error , response) => {

        if (error) {
            callback("Network Error: Unable to connect to Mapbox API.", undefined);
        }
        else if (response.body.message) {
            callback("API Error: " + response.body.message, undefined);
        }
        else if (!response.body.features || response.body.features.length === 0) {
            callback("Country/City not found.", undefined);
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0]
            });
        }
    })
};

module.exports = by1