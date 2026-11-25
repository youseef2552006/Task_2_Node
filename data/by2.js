const request = require("request")

const by2 = (l1 , l2 , callback) => {
    const gocodeURl = "http://api.weatherapi.com/v1/current.json?key=" + process.env.WEATHER_TOKEN + "&q=" + l1 + "," + l2 + "&aqi=no"

    request({url : gocodeURl , json : true} , (error , response) => {

        if (error) {
            callback("Network Error: Unable to connect to Weather API.", undefined);
        }
        else if (response.body.error) {
            callback("API Error: " + response.body.error.message, undefined);
        }
        else {
            callback( undefined , response.body.current.temp_c);
        }
    })
};

module.exports = by2