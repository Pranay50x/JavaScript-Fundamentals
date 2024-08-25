// var a =10  // global scope
//suppose we use let instead of var then it will give error as let is block scope
let a =1000
if(true){
    let b = 20  // block scope
    var c = 30
    let a =200  // due to usage of var a is updated to 100(that is why we avoid using var)
    console.log(a)
    console.log(b)
}
console.log(a)

//nested scope

function one(){
    const userName= 'Pranay'

    function two(){
        const website = 'github'
        console.log(userName); // it will work as userName is defined in parent scope
        console.log(website)
    }
    // console.log(website); // it will give error as website is not defined
    two();
    
}
one();

if(true){
    const name = 'Pranay '
    if(name=='Pranay '){
        const website = 'github'
      console.log(name+website);
    }
    // console.log(website); // it will give error as website is not defined
    
}
// console.log(name); // it will give error as name is not defined
addOne(5); //can use function before defining it
function addOne(value){
    return value+1;
}

//addtwo(5); //can't use function before defining it    
const addtwo = function(value){
    return value+2;
}

console.log(addtwo(5));
