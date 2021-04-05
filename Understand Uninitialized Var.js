// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

var myStr ='<a href="http://www.example.com" target="_blank">Link</a>';

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function reusableFunction() { console.log("Hi World"); } 

// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");


function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

function test (myCondition) { 
  if (myCondition) { return "It was true"; } return "It was false"; 
  } 
  test(true); 
  test(false); 
  
  
  function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);


function test (myCondition) { 
  if (myCondition) { return "It was true"; } return "It was false"; 
  } 
  test(true); 
  test(false); 
  
  
  function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else{
  return "Between 5 and 10";
}
}
testElseIf(7);

//--------------------------------------------
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);


//-------------------------------------------------------------------

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}
