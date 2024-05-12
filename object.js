//objects
//singleton is an object which is made from the constructor 

//object literals
const section = Symbol('sym1')
const student = {name: 'Pranay',
    rollno: 81, 
    email: '2005pranykr@gmail.com',
    grade: '96%' ,
    [section]: 'D'
}; 

//accessing the objects
console.log(student.grade); //can be accessed by the . operator all objects of a variable
console.log(student['grade']); //best way to access a object is this  synatax: var_name['object value']
console.log(student[section]); //accessing a symbol from a variable

