const user = {
    userName: 'Pranay50x', 
    website: 'github.com',

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to ${this.website}`); //this is for current object/context
        console.log(this); //prints the current object
        
    }
}
user.welcomeMessage(); //prints for current object which is not changed at all 
user.userName = "Pranay";
user.welcomeMessage(); //now changes the userName and prints the updated userName
console.log(this); //prints the global object

function sample(){
    let name = "pranay"
    console.log(this.name); //prints undefined as name is not defined in global object
    
}
sample(); //this works for object and not for function

const users = () => {
    let name = "pranay"
    console.log(this.name); //prints the global object
}
users(); //here again it says its undefined as name is not defined in global object

//Arrow function
const addTwo = (num1,num2) => {  //basic arrow function syntax for adding two numbers
    return num1+num2; 
}
console.log(addTwo(5,5)); //prints 10

//implicit return 
const addThree = (num1,num2,num3) => num1+num2+num3; //implicit return

console.log(addThree(5,5,5)) //prints 15 implicit return 

//only when we use {} we need to use return statement, where as when we use () we can use implicit return

const addtwo = (num1,num2) => ({user: 'pranay'}) //when using object we need to use () to avoid confusion with {} of function
console.log(addtwo(5,5)); 

const array  = [1,2,3,4,5]

array.forEach(()=>{}) //method of array which takes function as argument
