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


//-----------------------------------------------------------------------------------

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);


//------------------------------------------------------------------------------------

function isEqual(a,b) {
  return a === b;
}

isEqual(10.11);

//--------------------------------------------------------------
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};

//------------------------------
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

//------------------------------
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


//----------------------------------------------------


// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;       // Change this line
var player = testObj[playerNumber];   // Change this line



//-------------------------------------------------------------

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

myDog.name = "Happy Coder";


//-----------------------------------------------------

myDog.bark = "woof";

// Only change code below this line
delete myDog.tails;




//---------------------------------------------------------------------
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
var phonetic = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"

}
result = phonetic[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//-------------------------------------------------------------------
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

//---------------------------------------------------------------------

{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  //---------------------------------------------------------------------
  
  var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

//-------------------------------------------------------------------------

// Setup
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1];

//-------------------------------------------------------------------------------

var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}


//--------------------------
var myArray = [];

// Only change code below this line.
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

//----------------------------------------------------------------------------------------------------
// Setup
var myArray = [];

// Only change code below this line.
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}

//------------------------------------------------------------------------------------------
// Setup
var myArray = [];

// Only change code below this line
for(var i=1; i<=5; i++){
  myArray.push(i);
}

//-------------------------------------------------------------------------------------
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

//------------------------------------------------------------------------------------
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

//----------------------------------------------------------------------------------
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//-------------------------------------------------------------
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//---------------------------------------------------------------
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i <= 10);


//------------------------------------------------------------
// Setup
var myArray = [];

// Only change code below this line

for(var i=1; i<10; i+=2){
  myArray.push(i);
}


//--------------------------------------------------------------------
// Setup
var myArray = [];

// Only change code below this line
for(var i=9;i>0;i-=2){
  myArray.push(i);
}

//----------------------------------------------------------------------
// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total=0;
for(var i=0;i<myArr.length;i++){
  total=total +myArr[i];
}
//-------------------------------------------------------------------------
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//--------------------------------------------------------------------------------

