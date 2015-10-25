// //row1///////
// document.getElementById('clear').innerHTML = 0;
// document.getElementById('answer').innerHTML = 0000;
// //row2///////
// document.getElementById('seven').innerHTML = 7;
// document.getElementById('eight').innerHTML = 8;
// document.getElementById('nine').innerHTML = 9;
// document.getElementById('divide').innerHTML = 00000;
// //row3///////
// document.getElementById('four').innerHTML = 4;
// document.getElementById('five').innerHTML = 5;
// document.getElementById('six').innerHTML = 6;
// document.getElementById('multiply').innerHTML = 0000;
// //row4///////
// // var one = document.getElementById('one').innerHTML = 1;
// document.getElementById('two').innerHTML = 2;
// document.getElementById('three').innerHTML = 3;
// document.getElementById('minus').innerHTML = 0000;
// //row5//////
// document.getElementById('zero').innerHTML = 0;
// document.getElementById('decimal').innerHTML = ".";
// document.getElementById('calculateBtn').innerHTML = 0000;
// document.getElementById('plus').innerHTML = addition;
//
// function addition (a, b) {
// ///Links HTML and sets value from input boxes and stores it to var a & var b///
//   var a = document.getElementById('num_one').value;
//   var b = document.getElementById('num_two').value;
//
// // Expression for addition function////////////////////////////////////////////
//   var c = parseInt(a) + parseInt(b);
// //Tests my expression and logs it//////////////////////////////////////////////
//   // console.log(c);
// //Links to answer span and displays expression value///////////////////////////
//
// };
//
// //*Calculate Button Click*/////////////////////////////////////////////////////
// var subButton = document.getElementById('calculateBtn');
// var oneButton = document.getElementById('one');
// var twoButton = document.getElementById('two');
// var addButton = document.getElementById('addition');
//
// function printOne () {
//   console.log('you clicked the 1!');
//   return 1;
//   document.getElementById('answer').innerHTML = 1;
// };
//
// function printTwo () {
//   console.log('you clicked the 2!');
//   return 2;
//   document.getElementById('answer').innerHTML = 2;
// };
//
// function handleClick() {
//   console.log('you clicked the button!');
// };
//
// subButton.addEventListener('click', handleClick);
// subButton.addEventListener('click', addition);
//
// oneButton.addEventListener('click', handleClick);
// oneButton.addEventListener('click', printOne);
//
// twoButton.addEventListener('click', handleClick);
// twoButton.addEventListener('click', printTwo);

var x;
var y;
var operator;
// var equals;
var answer;
// var geval = eval;

var digits = document.querySelectorAll('.digit');
var operators = document.querySelectorAll('.operator');
var equals = document.getElementById('equals');
var answerBox = document.getElementById('answer');
var clear = document.getElementById('clear');


for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener('click', handleDigitClick);
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener('click', handleOperatorClick);
}

equals.addEventListener('click', handleEqualsClick);
clear.addEventListener('click', handleClearClick);


function handleEqualsClick(event) {
  var value = event.target.value;

    if (['='].indexOf(value) != -1) {
        // answer = geval("x + operator + y");
        console.log(eval("x + y"));
        // x = answer;
        // y = undefined;
        // operator = undefined;
        // return
    };
};

function handleOperatorClick(event) {
  var value = event.target.value;

  if (['/', '*', '-', '+'].indexOf(value) != -1) {
    // if (value == '=') {
    //   answer = eval(x + operator + y);
    //   x = answer;
    //   y = undefined;
    //   operator = undefined;
    //   return;
    //   console.log(answer);
    // }
    // operator = value;
    return;
  }
  return;
};

function handleDigitClick(event) {
  var value = event.target.value;
  if (x === undefined) {
    x = value;
  } else if(x && !operator) {
    x = x + value;
  }

  if (y === undefined && operator) {
    y = value;
  } else if(y){
    y = y + value;
  }

  if (!y && !operator) {
    answerBox.innerText = x;
  } else if(operator && !y){
    answerBox.innerText = x + operator;
  } else if(x && operator && y){
    answerBox.innerText = x + operator + y;
  }

};

function handleClearClick (event) {
  var value = event.target.value;

  document.getElementById('answer').innerHTML = 0;
  return;
  // console.log(clear);
  // document.getElementById('answer').reset();
}
