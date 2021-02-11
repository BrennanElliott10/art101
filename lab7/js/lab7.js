/*
 *Author: Brennan Elliott <brtellio@ucsc.edu>
 *Created: 3 February
 *License: Public Domain
 */

//Sort the inputted name
 function nameFixer() {
   var name = window.prompt("Let me know your name so I can fix it for you.");

   //Split name into array
   var nameArray = name.split('');

   //Sort array
   var nameArraySort = nameArray.sort();

   //Join array back to string
   var nameSorted = nameArraySort.join('');
   return nameSorted;
 }

 // output
 document.writeln("<div id='output'>Hey, I fixed your name for you! ",
  nameFixer(), "</div></br>");
