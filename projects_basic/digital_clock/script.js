const clock  = document.querySelector('#clock')

setInterval(function(){
    let date = new Date();  
// console.log(date.toLocaleTimeString());//getting the time via new Date() object
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
