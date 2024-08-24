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

