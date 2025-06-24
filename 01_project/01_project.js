const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
button.forEach((i)=>{
  console.log(i);
  i.addEventListener("click",(j)=>{
    const color = j.target.id;
    switch(color){
      case "grey":
      body.style.backgroundColor = "grey";
      break;
      case "white":
      body.style.backgroundColor = "white";
      break;
      case "blue":
      body.style.backgroundColor = "blue";
      break;
      case "yellow":
      body.style.backgroundColor = "yellow";
      break;
    }

    // if(color === "grey"){
    //   body.style.backgroundColor = color;
    // }
    // if(color === "yellow"){
    //   body.style.backgroundColor = color;
    // }
    // if(color === "blue"){
    //   body.style.backgroundColor = color;
    // }
    // if(color === "white"){
    //   body.style.backgroundColor = color;
    // }
  })
})

