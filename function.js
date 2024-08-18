function sayMyName(){
    console.log("Pranay");
}
sayMyName(); //without the () the function is not called and the output is not displayed, and its just a reference. 

// function addNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addNumbers(num1,num2){
    let result = num1+num2;
    return result;
    //beyond the return statemnt nothing gets executed. 
    // return num1+num2; //this is also a valid return statement
}

const result = addNumbers(4,3);
console.log(`Result: ${result}`); //undefined is returned since the function does not return anything.


function loginUserMessage(username="default"){ //default value is set here
    if(username===undefined){
        console.log("Please enter a valid username");
        return;
        
    }
    return `${username} just loggen in`; 
}
console.log(loginUserMessage());  // if u dont pass anything gonna return undefined 