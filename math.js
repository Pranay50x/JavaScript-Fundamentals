const marks  = 100.7899; 
//a better way of doing it. 
const totalMarks = new Number(100); // now the type is clearly specified in the broswer as well that its a number. 

console.log( typeof totalMarks);//even though the type here says its a number when u try the same command in the browser it says undefined since we are actually not specifying the type here.
//note for totalMarks variable the type turns into a object. 

console.log(totalMarks.toString());//converts the marks number t0 string
//converting a number into a strinf unlocks all the string properties and that can be accessed by the const which has been converted into a string. 

console.log(totalMarks.toFixed(2)); //shows the decimal places to the client whenever making a site/app which deals with bills shows only two decimal places as x.00 where x is any number

const num1 = 23.890000; //O/p is 23.9

console.log(num1.toPrecision(3));// fixes the precision to 3 digits only doesnt do the rounding off work here

const amount  = 1000000; // goes by default US numbering system make it Indian by using the en-IN argument in toLocaleString

console.log(amount.toLocaleString('en-IN'));//adds , useful when dealing with large numbers

//console.log(Number.MAX_VALUE);  //run this cell to know whats the MAX_VALUE allowed for a number in JS
//console.log(Number.MAX_SAFE_INTEGER); //run this cell to know whats the MAX_SAFE_INTEGER allowed for a number in JS

//Math part 

console.log(Math.abs(-0.5)); //absolute value is returned only +ve numbers
console.log(Math.floor(5.7)); //returns only integer part of the number
console.log(Math.round(4.5)); //normal rounding off of digits rounds off to next digit if decimal value is 0.5 and greater and rounds to the integer if 0.5 or lesser
console.log(Math.ceil(5.2));  //always rounds off to the next successive number there
console.log(Math.floor(3.8)); //always rounds off to the integer part ie the decimal is ignored similar to that of thr floor function

//Math.random()
console.log(Math.random()); // randomly generates a number less than 1 by default

console.log(Math.random()*10); //now between 1 and 10 it gives us a number now let us try getting only an integer number
console.log(Math.floor(Math.random()*10)); //using the floor function to get only the int part of the number. 

const max = 20; 
const min = 10; 

console.log(Math.floor((Math.random())*(max-min+1) +min)); //this can be used with high diversity and generates a random number b/w the max and min value set by the user



