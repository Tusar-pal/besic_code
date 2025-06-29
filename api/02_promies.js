// const promiseone = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         console.log("promise print")
//         resolve();
//     },1000)
// })

// promiseone.then(function(){
//     console.log("promies is consumed");
// })

const promiesone = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("called promies");
        resolve();
    },3000)
})

promiesone.then(function(){
    console.log("promies is consume");
})