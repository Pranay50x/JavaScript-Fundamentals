//use the tilde operator and then using them print the variables who have string values. 

const myName = "Pranay"; 

const degree = "CSE(AI&ML)"

console.log(`Hello there my name is ${myName}, and I am pursuing my degree in ${degree}`)


//creating new consts with names and the new String function use-case and then later accessing them specifying their index values
const longName  = new String("William"); 
const shortName = longName.substring(0,4); //in the substring() method the first should be start index and the next should be the end index
const slicedName = longName.slice(-7,3); //slice() method involves us using start index value which can be any number(+ve or - ve) and then the next number specifies till what index the string has to be sliced  up. 
const trimsString = "     pranay    "; //a string value which has to be trimmed
const replaceString = "shit"; // a string to demonstrate replaceString

console.log(longName[0]); 
console.log(longName.length)//gives us the length of the string
console.log(longName.__proto__) //returns a pair of {} which tells us the object is existing and BE WARE THE OBJECT IS NOT NULL
console.log(longName.toUpperCase()); //converts everything to Uppercase similar thing can be seen with toLower() property as well 
console.log(longName.charAt(5));// access the characters at some place of the string 
console.log(longName.indexOf("W")); //access the index number via the character
console.log(shortName); // a shortened name 
console.log(slicedName); //a sliced name
console.log(trimsString); //string as it is without it being trimmed
console.log(trimsString.trim()); //the string with white spaces and blank character removed
console.log(replaceString.replace('i','*'));// here the replaceString is used to remove the first character specified in '' and then replaces it by the character we want to 

