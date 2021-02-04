console.log("javascript");
var nameVar = "Brennan";
var numVar = 27;
console.log(numVar);
numVar = 28;
console.log(numVar);

function myFirstFunction (){
  console.log("this is my first function!");
}
console.log(myFirstFunction)

function comparingNumbers(firstNum, secondNum){
  console.log("First Number: " +firstNum+" second Number: " +secondNum);
  console.log("First Number is greater than second Number " + (firstNum>secondNum));
  console.log(numVar);
  firstNum = 11;
  secondNum = 10;
  console.log("First Number: "+firstNum+ " Second Number: " +secondNum);
  console.log("First number is Greater than second number " + (firstNum>secondNum));
  numVar=numVar+3;
}

comparingNumbers(2,1);
console.log(numVar);
numVar = numVar + 40;
comparingNumbers(12,18);
console.log(numVar);
