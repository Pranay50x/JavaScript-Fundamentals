//good but bteeter approach is there 
// document.getElementById('owl').onclick = function(){
//     alert('Owl clicked');
// }

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log('Owl Clicked');
//     e.stopPropagation();
// }, false) //third parameter is false by default

//we can use attachEvent() and jQuery as well

document.getElementById('btn').addEventListener('click', function (e){
    // console.log(e.timeStamp);
})

// let paragraphs = document.querySelectorAll('p');

// // Add a keydown event listener to each <p> element
// paragraphs.forEach(paragraph => {
//   paragraph.addEventListener('keydown', function(e) {
//     // Display the pressed key in the element
//     paragraph.textContent = `Key pressed is ${e.key}`;
//   })

//   paragraph.addEventListener('click', function() {
//     paragraph.focus();
//   });
// });

let para = document.getElementById('para');
let p2 = document.getElementById('p2');

p2.addEventListener('keydown', function(e){
    para.textContent = `Key pressed is ${e.key}`;
})

//event target is the element that triggered the event
//event.currentTarget is the element that the event listener is attached to. 
//It is the element that the event listener is listening for the event on.

document.getElementById('btn').addEventListener('click', function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.timeStamp);
})

// let images = document.querySelectorAll('img');

// images.forEach(image => {
//     image.addEventListener('click', function(e){
//         alert(`Image ${e.target.id} clicked`);    
//     })
// })

let mouse = document.getElementById('mouse');

document.addEventListener('mousemove', function(e){
    mouse.textContent = `Mouse X: ${e.clientX} Mouse Y: ${e.clientY}`;
    document.createElement('br');
    mouse.textContent += ` Screen X: ${e.screenX} Screen Y: ${e.screenY}`;
})

document.getElementById('images').addEventListener('click', function(e){
    console.log('Image clicked');
}, false)

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log('Google clicked');
    
}, false)

// let image = document.querySelectorAll('li')

// image.forEach(image => {
//     image.addEventListener('click', function(){
//        image.style.visibility = 'hidden'
//     })
// })

//alternate way of doing things: 
document.querySelector('#images').addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        let removeImg = e.target.parentNode
        console.log(e.target.id);
        removeImg.remove()
    }
})