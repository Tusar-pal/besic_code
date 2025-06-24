
const clock = document.querySelector("#clock");
setInterval(()=>{
    // setInterval() is a built-in JavaScript function that repeatedly calls a function or runs code at fixed time intervals (measured in milliseconds).
    const date = new Date();
    //const date = new Date()-->This line creates a new Date object that holds the current date and time.
    clock.innerHTML = date.toLocaleTimeString();
},1000)
