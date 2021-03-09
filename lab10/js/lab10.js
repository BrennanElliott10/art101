/*
*Author: Solomon Bell <somibell@ucsc.edu>
*Created: 17 February
*License: Public Domain
*/

var buttonEl = document.getElementById("my-button");
console.log("Button Element:" + buttonEl);

var inputEl = document.getElementById("userName");
console.log("Input Element:" + inputEl);

var outputEl = document.getElementById("output");
console.log("Output Element:" + outputEl);

function sortUserName(word) {
  return word.toLowerCase().split('').sort().join('');
};

buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = sortUserName(userName);
  outputEl.innerHTML = newName;
});

var buttonEl = document.getElementById("my-button2");
console.log("Button Element:" + buttonEl);

var inputEl = document.getElementById("userName");
console.log("Input Element:" + inputEl);

var outputEl = document.getElementById("output2");
console.log("Output Element:" + outputEl);

function sortUserName(word) {
  return word.toLowerCase().split('').sort().join('');
};

buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = sortUserName(userName);
  outputEl.innerHTML = newName;
});
