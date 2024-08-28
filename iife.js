//Immediately Invoked Function Expression (IIFE)
// to prevent the global scope from being polluted we use IIFE

(function hello(){
    console.log("Hey there")
})();  // syntax of iife , function is wrapped in () and then () is used to call the function
//make sure to terminate the iife once used by a ;, without terminating it will throw an error

( (name) => {
    console.log(`Hello there ${name}`)  
})('Pranay'); //iife with arrow function and passing of a parameter 

