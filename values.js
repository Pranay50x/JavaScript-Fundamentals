//values that return false always
//0 , null, undefined, NaN, false, '', -0, BigInt 0n 

//values that return true always
// '0', ' ', [], {}, function(){} , -1, 1, 1n, 'false'

//Nulling Coalescing Operator (??): null undefined

let val1; 
val1 =5 ?? 10;
val2  = null?? 10;  //same goes with undefined

console.log(val2);
 
console.log(val1); //5 is shown as it is not null or undefined

