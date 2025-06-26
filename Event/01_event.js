//EventPropagetion--->
// Eventbubbleing (false)
// Capcturing (true)

   

//     document.getElementById('images').addEventListener('click',function(){
//         console.log("click the image");
        
//     },false)


//  document.getElementById('owl').addEventListener('click',(e)=>{
//        // alert("clicked owl");
//             console.log("click owl")
//             e.stopPropagation();
//             //stopPropagation() when we want an event to be handled only at the current element and not passed on to parent elements.

//     },false)

//     document.getElementById('google').addEventListener('click',function(a){
//         a.preventDefault();
//         a.stopPropagation();
//     },true)


// images remove process ----> 1st type

//    const image1 = document.querySelector("#images");
//    image1.addEventListener('click',function(e){
//     const removes = e.target.parentNode;
//     removes.remove();

//    },false)

// images remove process ----> 2nd type
 
//    const image2 = document.querySelector("#images");
//    image2.addEventListener('click',function(e){
//     const removes = e.target.parentNode;
//     console.log(removes.parentNode)
//     removes.parentNode.removeChild(removes)
//    },false)

// images remove process ----> 3rd type

   let image3 = document.querySelector("#images");
   image3.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName);
     if(e.target.tagName === 'IMG'){
       let removeIt = e.target.parentNode;
       console.log(removeIt);
        removeIt.remove();
     }
   },false)