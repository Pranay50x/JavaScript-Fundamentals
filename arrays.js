//arrays in JS can hold all types of values 
const newArray = [1,2,3,true,'pranay',2.44, false]; 

//can access any value by specifying the index values like any other language 
console.log(newArray[0]);//they are zero indexed and start from 0 
console.log(newArray); //array indexing starts from 0th position as usual 

const veggies = ['Potato','Bottle Gourd','Yam','Onion',]
const fruits = new Array(1,2,3,4); //another way of declaring an array
console.log(fruits);
const blankArray = new Array(1,2,3,4,5,6); 

//array Methods
blankArray.push(6); //syntax for this is array_name.push('element to be pushed') 
blankArray.pop()//simply pops the last element of the array 


blankArray.unshift(9); //adds an element specified in the brackets to the 0th position
blankArray.shift(); //removes the first element from the array index
console.log(blankArray);

console.log(blankArray.includes(5)); //this method allows us to check whether a certain element is present in an array or not 
console.log(blankArray.indexOf(3)); //returns the index value a valid number greater than 0 if exists else returns -1 for every element not existing in the array

//join method
const emptyArray = blankArray.join(); //used to copy the entire contents of an array in the process converts the new copied array into a string form
console.log(emptyArray); //see the o/p in str format
console.log(typeof emptyArray); //type of the new copied array is a string

//slice and splice
console.log('Array before any operation: ',blankArray);
const sliceArray = blankArray.slice(1,4);  //it takes the array elements from the start index to the n-1 index
console.log('new array of slice operation: ',sliceArray);
console.log('Array after slice: ',blankArray);//the orginal array is not being manipulated at all its as its slice doesnt change the orginal array

//splice operation
const spliceArray = blankArray.splice(1,4); //this includes both the ranges specified and modifies the array its splicing it from 
console.log('Spliced array is: ',spliceArray); 
console.log('Orginal Array after splicing: ',blankArray); //the original array is being manipulated here 

//
const company = ['Apple','Google','Microsoft','Facebook'];
const startups = ['Perplexity','Cognition Labs','Continue.dev','SunoAI']; 

// company.push(startups); //method ends up clubbing one array in another one which is not feasible
// const clubbed = company.concat(startups); //this works but have to use a thord variable to see actually whats happening 

console.log([...company, ...startups]); //the spread method is used to concat 2 arrays widely used most popular

//arrays combination
const arr1 = [1,2,3,[4,5,6],[7,[8]]]; //the array has many arrays contained in it 
console.log(arr1.flat(Infinity)); //the flat method allows us to combine all in a single array
