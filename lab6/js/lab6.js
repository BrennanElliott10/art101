/*
 *Author: Brennan Elliott <brtellio@ucsc.edu>
 *Created: 27 January
 *License: Public Domain
 */

//types of transportation
myTransport = ["drive", " bike", " scooter", " Uber"];

//details of car
myMainRide = {
    make: "Honda",
    model: "Accord",
    color: "Gray",
    year: 2009,
    age: function() {
        return 2021 - age;
    }
};

//output
document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
