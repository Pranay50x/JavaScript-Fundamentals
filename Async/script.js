// const sayMyName = function(){
//     console.log('Pranay');
// }

// const changeText = function(){
//     document.querySelector('h1').innerHTML = 'JS is Async'
// }

// const changeMe = setTimeout(changeText,2000)
// setTimeout(sayMyName, 2000)

// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe); 
//     console.log('Stopped');
// })

const sayDate = function(){
    console.log("mY name is pranay", Date.now());
}
// 

const start = document.querySelector('#start')

let interval; 

start.addEventListener('click', function(){
     interval  = setInterval(sayDate, 2000)
})

const stopbtn = document.querySelector('#stop')

stopbtn.addEventListener('click', function(){
    clearInterval(interval);
})

