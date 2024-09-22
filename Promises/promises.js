const promiseOne = new Promise (function(resolve, reject){
    // can do any async tasks, cryptography, network calls, db calls also  
    setTimeout(function(){
        console.log("Async task is complete. ");
        resolve()
    }, 1000)
    
})

promiseOne.then(function(){
    console.log("Promise Consumed. ");
    
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "pranay50x",
            email: "pranay@example.com"
        })
    }, 1000)
    
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false; 
        if(!error){
            resolve({userName: 'pranay51x',
                password: 'helloworld'
            })
        }
        else{
            reject('Error incorrect pswd')
        }
    }, 1000)
})

 promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName);
    
}).catch((e)=> console.log(e)
).finally(()=> console.log("Promise is either resolved/rejected")
)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; 
        if(!error){
            resolve({userName: 'pranay52x',
                password: '1helloworld'
            })
        }
        else{
            reject('Error incorrect paswd')
        }
    }, 1000)
})

async function consume_promiseFive() {
   try {
    const response = await promiseFive;
    console.log(response);

   } catch (error) {
        console.log(error);
   }
    
}

consume_promiseFive()

// async function fetchUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.org/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchUsers()

fetch('https://jsonplaceholder.org/users')
.then((response)=> response.json())
.then((data)=> console.log(data)
)
.catch((e)=> console.log(e)
)