const languages = ['JavaScript', 'PHP', 'Python', 'Ruby', 'Java', 'C'];

const printer = languages.forEach( (language)=> {
    console.log(`${language}`);
    return language;
})
console.log(printer); //always returns undefined as forEach always returns undefined

const num = [1,2,3,4,5,6,7,8,9,10];

const filtered = num.filter((n)=> n>5 ) //one line arrow function no need to give return keyword

console.log(filtered);
// different way of doing same task quite tedious and not recommended usig forEach method to sort the elements
const new_num = []

num.forEach( (n) => {
   if(n>5){
    new_num.push(n)
   }
} )
console.log(new_num);

const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title: 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    }, 
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83
    },
    {
        title: 'Bones',
        authors: ['Jeff Smith'],
        rating: 4.42
    },{
        title: 'The Overstory',
        authors: ['Richard Powers'],
        rating: 4.19
    },
    {
        title: 'The Name of the Wind',
        authors: ['Patrick Rothfuss'],
        rating: 4.54
    },
]

const userBooks = books.filter( (book) => book.rating>4)
console.log(userBooks);

const myNum = [1,2,3,4,5,6,7,8,9,10];

const newnnum = myNum.map((num)=> num+10) //similar to map, again when {} is used return keyword is needed
console.log(newnnum);

//chaining map and filter ie combining them together and using 
const newNumbers = [2,4,5,6,7,8,9,10]; 

let chainedNums = newNumbers.map((num)=> num*10).map((num)=> num+5).filter((num)=> num>=40)
console.log(chainedNums);

//using reduce 

const numbers = [1,2,3,4,5,6,7,8,9,10];

const reduce_method = numbers.reduce((acc,cv)=> acc+cv ,0) //without explicitly mentioning the initiavalue is 0
console.log(reduce_method);

//another way of using the reduced part 
const red_method = numbers.reduce(function (acc,cv){
    console.log(`Value of acc is ${acc} and value of cv is ${cv}`);
    return acc+cv; 
}, 0)

console.log(red_method);

const shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    },
    {
        product: 'Charger',
        qty: 1,
        price: 15.99
    }
]

const finalTotal = shoppingCart.reduce((acc,item)=> acc+ item.price , 0 )
console.log(finalTotal);


