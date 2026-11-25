const by1 = require("./data/by1")
const by2 = require("./data/by2")
require('dotenv').config()

const address = process.argv[2]

console.log("\ncountry is " + address + "\n")

by1(address, (error, response) => {

    if (error) {
        console.log("ERROR:", error)
        return;
    }

    console.log("Latitude: ", response.latitude)
    console.log("Longitude: ", response.longitude)

    by2(response.latitude, response.longitude, (error, data) => {

        if (error) {
            console.log("ERROR:", error)
            return;
        }

        console.log("Temperature is:", data)
    })

})