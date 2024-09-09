const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)]
                
    }
    // document.body.style.backgroundColor = color
    return color            
}

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
let interval; 

// startButton.addEventListener('click', function(){
    
//     // document.body.style.backgroundColor = randomColor()
//     interval = setInterval(randomColor,2000)
// })

// stopButton.addEventListener('click', function(){
//     clearInterval(interval)
// })

//better way
const startChangeColor = function(){
    interval = setInterval(chnageBg,2000)

    function chnageBg(){
        document.body.style.backgroundColor = randomColor()
    }
}

const stopColorChange = function(){
    clearInterval(interval)
}

stopButton.addEventListener('click', stopColorChange)
startButton.addEventListener('click', startChangeColor)