/*
 *Author: Brennan Elliott <brtellio@ucsc.edu>
 *Created: 3 February
 *License: Public Domain
 */
// var to specify div
var outputEl = document.getElementById("output");
//var to create a paragraph
var new1El = document.createElement("p");
//add text to paragraph
new1El.innerHTML = "Something New";
//give paragraph an id
new1El.id = "1";
//print paragraph
outputEl.appendChild(new1El);

//repeate for 2nd paragraph
var new2El = document.createElement("p2");
new2El.id = "2";
new2El.innerHTML = "Something Else :)";
outputEl.appendChild(new2El);

//css
document.getElementById("1").style.color = "blue";
document.getElementById("output").style.marginLeft = "35px";
document.getElementById("2").style.color = "red";
