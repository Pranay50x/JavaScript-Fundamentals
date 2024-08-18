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

function shoppingCart(val1,val2,...value){  //if there exists more parameters then lets see what happens. 
    return value; //does return the value lets if we have more than one value then..          
}

console.log(shoppingCart(10,1000,10000,200)); //entries are returned as an array . 
//this down shows us only the last two values are being returned and the other two r not even being considered even though the parameters for them are present. 

const user = {
    userName: 'Pranay', 
    days: 100,
}

function handleObject(anyObject){
    console.log(`Username is : ${anyObject.userName} and days is : ${anyObject.days}`);
}

//can pass in this way or might as well pass a object directly.
// handleObject(user);
handleObject({
    userName: 'John', 
    days: 1000,
})

const array = [100,200,300,400.500]; 

function returnSecondValue(getArray){
    return getArray[1];  //returns the second value in the array. accessing array via index values 
}
//can pass again via an array declared previously or do it directly 
console.log(returnSecondValue(array));
console.log(returnSecondValue([200,300,500.600]));


