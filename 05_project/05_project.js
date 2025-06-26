//create rendom color

const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};

let intervalId ;
const start = document.getElementById("start")
const stop = document.getElementById("stop")

start.addEventListener('click',function(){
    if(intervalId == null){
    intervalId = setInterval(function(){
       
            document.querySelector('body').style.backgroundColor = randomColor();
        
    },1000)

}
})
stop.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null ;
})

