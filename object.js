//objects
//singleton is an object which is made from the constructor 

//object literals
const section = Symbol('sym1')
const student = {name: 'Pranay',
    rollno: 81, 
    email: '2005pranykr@gmail.com',
    grade: '96%' ,
    [section]: 'D',  //syntax of the symbol while using in an object be ware of the [] brackets
    "full name": 'Pranay K R'
}; 

//accessing the objects
console.log(student.grade); //can be accessed by the . operator all objects of a variable
console.log(student['grade']); //best way to access a object is this  synatax: var_name['object value']
console.log(student[section]); //accessing a symbol from a variable
console.log(student["full name"]);  //accessing a object with a space in between the name

student.rollno = 90 //changing the value of the object
console.log(student.rollno); //new value of the object
// Object.freeze(student); //freezing the object so that no changes can be made to the object

student.rollno = 100; //trying to change the value of the object
console.log(student.rollno); //the value remains the same as the object is frozen

const std1 = {
    name: 'xyz',
    rollno: 81,
}  ; 
std1.greet = function () { 
    console.log(`hey there ${this.name} wsg`); 
}

console.log(std1.greet());


// const newUser = new Object(); //single object creation
const newUser = {}; //non singleton object creation
newUser.id ="name@gmail.com"; 
newUser.password = "1234";
newUser.isLoggedin = false;
console.log(newUser);


const newerUser = {
    email: "justbether@gmail.com", 
    fullname: {
    userPersonalDetails:    {
            firstname: 'Pranay',
            lastname: 'K R'         //creating nested objects and accessing them 
         }
    }
}
console.log(newerUser.fullname.userPersonalDetails); //accessing the nested object

const obj1 ={
    1: 'a', 2: 'b'
}
const obj2 ={
    2: 'c', 3: 'd'
}

const obj3 = Object.assign({},obj1,obj2); //merging the two objects into a single object

//alternate way of doing this 
const obj4 = {...obj1,...obj2} //better way of combining the two object classes 

console.log(obj4);

//array of objects
const users =[
    {
        id: 1, 
        name: 'pranay'
    },
    {
        id: 2, 
        name: 'john'
    },
    {
        id: 3, 
        name: 'doe'
    }
]

console.log(newUser);
console.log(Object.keys(newUser)); //returns the keys of the object
console.log(Object.values(newUser)); //returns the values of the object
console.log(Object.entries(newUser)); //returns the key value pairs of the object

//checking for the properties in the object 
console.log(newUser.hasOwnProperty('id')); //returns true if the property exists else false

//destructuring objects 

const playerOne = {
    name: 'Pranay',
    age: 21,
    country: 'India'
}

const {country:basicInfo} = playerOne; //destructuring the object
console.log(basicInfo); //printing the destructured object