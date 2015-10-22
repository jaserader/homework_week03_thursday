

function addition (a, b) {
///Links HTML and sets value from input boxes and stores it to var a & var b///
  var a = document.getElementById('num_one').value;
  var b = document.getElementById('num_two').value;

// Expression for addition function////////////////////////////////////////////
  var c = parseInt(a) + parseInt(b);
//Tests my expression and logs it//////////////////////////////////////////////
  console.log(c);
//Links to answer span and displays expression value///////////////////////////
  document.getElementById('answer').innerHTML = c;

};


//*Calculate Button Click*/////////////////////////////////////////////////////
var subButton = document.getElementById('calculateBtn');

function handleClick() {
  console.log('you clicked the button!');
};

subButton.addEventListener('click', handleClick);
subButton.addEventListener('click', addition);
