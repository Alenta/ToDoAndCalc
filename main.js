//Get the display("result"), set it's value += to new value.
var numbers = new Array();
var operators = new Array();
var result;
var index;
var currentNumber;
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
  document.getElementById("result").value += val; //Immidiately write number to display
  currentNumber = document.getElementById("result").value;
  numberEntered = true;
}
function addOperator(val) {
  if (!numberEntered) return;
  numberEntered = false;
  ///We are done adding the first number
  numbers.push(currentNumber);
  operators.push(val);
  document.getElementById("result").value += " " + val + " "; //write number to display with operator and spacing
}

function solve() {
  numbers.push(currentNumber);
  let solvestep;
  console.log("Solving...");
  for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    solvestep = i;
    if (i === 0) result = numbers[i];
    else if (operators[i - 1] === "+") {
      result += numbers[i];
    } else if (operators[i - 1] === "-") {
      result -= numbers[i];
    } else if (operators[i - 1] === "/") {
      result /= numbers[i];
    } else if (operators[i - 1] === "*") {
      result *= numbers[i];
    }
  }
  if (solvestep < numbers.length) {
    document.getElementById("result").value = result;
  } else console.log("Couldn't get to the end of array");
}

//Clear display
function clr() {
  document.getElementById("result").value = "";
}
