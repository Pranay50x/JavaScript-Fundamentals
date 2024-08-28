const array  = [1,2,3,4,5]

for (const num of array) {
    console.log(num);
}

const greetings = 'Hi wsg'

for (const greeting of greetings) {
    console.log(`Each char is ${greeting}`);
}
//maps
const map  = new Map() //for unique values and keys data redundancy is avoided and also the order in which the elements are set they are remained same.
map.set('India', 'New Delhi')
map.set('USA', 'Washington DC')
map.set('UK', 'London')

// console.log(map);

for (const [country, capital] of map) {
    console.log(`The capital of ${country} is ${capital}`);
}

const tapObject = {
    'Samsung': 'South Korea',
    'Apple': 'USA',
    'OnePlus': 'China'
}

// for (const [company, country] of tapObject) {
//     console.log(`The company ${company} is from ${country}`); // this will throw an error as tapObject is not iterable
    
// }

const newObject = {
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
    cpp: 'C++',
}

for (const sf in newObject) {
    console.log(`${sf}: ${newObject[sf]}`);
    
}

//Maps and Objects are not iterable so we can't use for of loop on them. But we can use for in loop on objects.

const companies = ['Samsung', 'Apple', 'OnePlus', 'Google']

companies.forEach( function (company){  //forEach is a method of array which takes a function as an argument and this function is called for each element of the array. 
    // console.log(company);
} )

companies.forEach( (company)=>{  //using arrow function again no need to give a name and =
    // console.log(company);
} )

// a better way of doing all this 
function printCompany(company){
    console.log(company);
}

companies.forEach(printCompany)

const objxarray = [
    {
        language: 'Javascript',
        type: 'Dynamic',
    }, 
    {
        language: 'Python',
        type: 'Dynamic',
    }, 
    {
        language: 'Ruby',
        type: 'Dynamic',
    }
]
objxarray.forEach( (obj)=>{
    console.log(obj.language);   
    
} )