/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: The variable name


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: The primitive string value "Tim"


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: The primitive string value "JD"


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: The primitive string value "Hello, how are you?"


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: The primitive number value of 50-10 which will give a response of 40

math = high - "5";
// Q: What is `math` set to?
// A: The primitive number value of 50-5 which will give a response of 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var timAge = today - born;
var timAgeSentence = "Tim is ";
timAgeSentence += timAge;
timAgeSentence += " years old";


// Store some information following in variables.
var yourName = "Mariah";
var instructorName = "Jason";

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
// This would be a BETTER final statement - Just sayin.
var statement = "My name is " + yourName + ", I am taking a class at The Iron Yard. My instructor's name is " + instructorName;
