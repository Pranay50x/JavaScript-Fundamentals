//primitive type of data number, int, float, boolean, null, symbol etc

bun = 'a real one';

let var1 = Symbol(bun); 

let var2 = Symbol(bun); 

console.log(var1==var2)
//the Symbol is used to infer the same value but the var1 and var2 never become equal on their own 

const bigNumber = 74983893289392833333333333333n

//arrays(NON REFERENCE TYPES)
const fruits =["apple","bananna","Guava"]; 
let vegies ={
    name: "Potaoto", 
    color: "Brown"
}
//type of is used to find the datatype of the particular variable. 
console.log(typeof vegies)


//memory types... 

//Stack(Primitive) Heap(Primitive)

let accountId = "pranay50x@github.com"; 
let newAccountId; 
newAccountId = accountId; 
newAccountId = "pranay49@github.com"; 
console.log(newAccountId); //new value is shown here being in the stack form
console.log(accountId) // this value is not affected as it was not manipulated it was just assigned to the newvariable it wont change the orginal value of the variable

//showing using an object example

let client1 = {
    name:"Jack",        //all the contents of the objects are stored as a heap memory which is later accessed by the stack memory users like client1 and client2 
    pswd: "1234"
}

let client2 = client1;  // get the details of the object from the heap memory 

console.log(client2.name)  //gives the same o/p Jack. 


