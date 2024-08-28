//Get the display("result"), set it's value += to new value.
var numbers = new Array();
var tempResult;
var operators = new Array();
var result;
var index;
var currentNumber = new String();
var numberEntered;

function display(val) {
  document.getElementById("result").value += val;
}

function checkKey(val) {
  if (val === "+" || val === "-" || val === "/" || val === "*" || val === ".") {
    addOperator(val);
  } //Else if key is "="
  else if (val === "=" && numberEntered) {
    solve();
  } else if (val === "CLR") {
    clr();
  } else enterNumber(val);
}
function enterNumber(val) {
  currentNumber += val;
  document.getElementById("result").value += val; //Immidiately write number to display
  //currentNumber = document.getElementById("result").value;
  //This is wrong! FIXME. This recursively adds the entire math problem to the numbers array.
  numberEntered = true;
}
function addOperator(val) {
  if (!numberEntered) return;
  numberEntered = false;
  ///We are done adding the first number
  numbers.push(currentNumber);
  currentNumber = "";
  operators.push(val);
  document.getElementById("result").value += " " + val + " "; //write number to display with operator and spacing
}

function solve() {
  numbers.push(currentNumber);
  let solvestep;
  console.log("Solving...");
  for (let i = 0; i < numbers.length; i++) {
    console.log("Mathing: " + numbers[i] + " " + operators[i]);
    solvestep = i;
    if (i < operators - 1) {
      console.log("Operator out of bounds");
      return;
    }
    if (i === 0) tempResult = numbers[i];
    else if (operators[i - 1] === "+") {
      tempResult = Number(tempResult);
      tempResult += Number(numbers[i]);
    } else if (operators[i - 1] === "-") {
      tempResult = Number(tempResult);
      tempResult -= Number(numbers[i]);
    } else if (operators[i - 1] === "/") {
      tempResult = Number(tempResult);
      tempResult /= Number(numbers[i]);
    } else if (operators[i - 1] === "*") {
      tempResult = Number(tempResult);
      tempResult *= Number(numbers[i]);
    }
  }
  if (solvestep < numbers.length) {
    document.getElementById("result").value = tempResult;
  } else console.log("Couldn't get to the end of array");
}

//Clear display
function clr() {
  document.getElementById("result").value = "";
  numbers.length = 0;
  operators.length = 0;
  tempResult = 0;
  result = 0;
  index = 0;
  currentNumber = "";
  numberEntered = false;
}

function clearAndCarryOver() {
  //Reset everything exept display
  numbers.length = 1;
  operators.length = 0;
  tempResult = 0;
  result = document.getElementById("result").value;
  index = 0;
  currentNumber = result;
  numberEntered = true;
}
