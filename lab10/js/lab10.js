/*
 *Author: Brennan Elliott <brtellio@ucsc.edu>
 *Created: 3 February
 *License: Public Domain
 */

 //find button element
buttonEl = document.getElementById("submit-button");
  console.log(buttonEl);

//add an event listener to button
buttonEl.addEventListener("click", function(){
  var userName = window.prompt("Hi.please tell me your name so I can fix it.");
  console.log("user name:", userName);
});
