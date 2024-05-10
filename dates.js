//dates start from Jan 1, 1970 

const date = new Date(); 
console.log(String(date)); // converting the date into a string can be done with the ToString function as well. 
console.log(date.toISOString()); //the o/p same as that of toJSON()
console.log(date.toJSON()); //o/p is in this way 2024-05-02T15:43:45.332Z
console.log(date.toLocaleString()); //o/p in this form 5/2/2024, 9:13:45 PM

console.log(date.toLocaleDateString()); // the proper form u get in mmddyyyy 
console.log(date.toDateString()); //this gets this form Thu May 02 2024
console.log(date.toUTCString()); //this gives the O/P in form of Thu, 02 May 2024 15:46:40 GMT

//making a newdate acc to us 
//try and make changes to the code to understanding how formatting works and which is best .to method to use. 

let customDate = new Date(2024, 4, 18); //months akways start from 0 here the Date(year,month,day,hour,minutes,seconds) is the form of giving the input to it. 
let newDate  = new Date(2024,4,17,9,0,0)
console.log(customDate.toDateString());//gives the date in desired form. 
console.log(newDate.toLocaleString());//formatted the date output 