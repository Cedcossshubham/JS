//this is a single line comment
/* 
this is a multiline comment
*/

var myName;  //variable created my name

/*
var a = 7;  // define a variable with val 7
var b;

// assign value to var a
a = 7;
// assign value of var a to b
b =a;

*/

//define a string var
var myFirstName ="John";
var myLastName = "Doe";



//change  the value of var
var a1 = 5;
var b1 = 10;
var c1 = "I am a";


a1 = a1 + 1;
b1 = b1 + 5;
c1 = c1 + " String!";

//change the variable name to camleCase
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//change the variable type from var to let
let catName = "Oliver";
let catSound = "Meow!";

console.log(catName);

// use of const variable
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line


//add two numbers
const sum = 10 + 10;
console.log(sum);

//subtract two numbers
const difference = 45 - 33;
console.log(difference);


//multiply two numbers
const product1 = 8 * 10;
console.log(product1);

//divide two numbers
const quotient1 = 66 / 33;
console.log(quotient1);

//use of increment operator
let myVar = 87;
myVar++;
console.log(myVar);

//use of decrement operator
myVar--;
console.log(myVar);

//declare a decimal variable
const myDecimal = 5.7;
console.log(myDecimal);

//decimal multiply
const product = 2.0 * 2.5;
console.log(product);


//decimal division
const quotient = 4.4 / 2.0;
console.log(quotient);

//mod operator
const remainder = 11 % 3;
console.log(remainder);

//assignment operator
let a = 11;
let b = 9;
let c = 3;

a += 12;
b += 9 ;
c += 7;

console.log(a);
console.log(b);
console.log(c);

//Compound Assignment With Augmented Subtraction
a -= 6;
b -= 15;
c -= 1;

console.log(a);
console.log(b);
console.log(c);

//Compound Assignment With Augmented Multiplication

a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

//Compound Assignment With Augmented Divisio
a /= 12;
b /= 4;
c /= 11;
console.log(a);
console.log(b);
console.log(c);

//use of escaper letter
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr);

//Quoting Strings with Single Quotes
const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr1);

//Escape Sequences in Strings
const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(myStr2);

//Concatenation operator in String
const myStr3 = "This is the start."+" This is the end.";
console.log(myStr3); 

//Concatenating Strings with the Plus Equals Operator
let myStr4 ="This is the first sentence.";
myStr4 += " This is the second sentence.";
console.log(myStr4); 


//Constructing Strings with Variables
const myName1 = "Hello";
const myStr5 = "world" + myName1 + "bye";
console.log(myStr5);

//use of add equal operator
const someAdjective = "Awesome";
let myStr6 = "Learning to code is ";
myStr6 += someAdjective;
console.log(myStr6);

//use length string function
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);


//use bracket notaion of string
let firstLetterOfLastName = "";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//change the string value
let myStr7 = "Jello World";
myStr7 = "Hello World"; 
console.log(myStr7);

//strint index
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

//last letter of string
const lastLetterOfLastName1 = lastName[lastName.length -1];
console.log(lastLetterOfLastName1);

//second last letter of string
const secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);


//use Madlib
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb; // Change this line

console.log(wordBlanks);


// array
const myArray = ["hello",5];

console.log(myArray);


//nested array
const myArray1 = [["one","two"]];
console.log(myArray1);
