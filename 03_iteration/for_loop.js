const a = 10;
for(let i=1 ; i<=a ; i++){
if(i%2==0){
    //console.log(i);
// }else{
   //console.log(i);
// }

  // console.log(i);
}
}
const array  = [4,3,6,8,1]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //console.log(element)
    
}

// for_each

array.forEach(element => {
   // console.log(element)
});

// ------------------------------------->
//for_in loop

const obj ={
    name :"tusar pal",
    gmail :"tusarpal@gmail.com",
    ph:976543234,
    address :{
        vill :"changual",
        dist :"paschim medinipur",
        state :"west bangal",
        pin : 721301
    }
}
for (const i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i)) {
        const element = obj[i];
        //console.log(element)
        
    }
}

//--------------------------------->

//for_of loop
const arr =[1,6,4,2,9]
const str ="tusar pal";
for (const i of arr) {
   // console.log(i)
}
//-------------------------->
//while

// let i = 1;
// while (i<=10) {
//    console.log(i)
//     i++;
// }

//------------------->
//Do_while loop

let i =1;
do {
        //console.log(i);
            i++;
            } while (i<=10);

//--------------------->
//Reverse loop

for(let i=10 ; i>=1;i--){
   // console.log(i);
}


// 1- 20 ka table

for(let i=1 ; i<=20 ; i++){
    console.log("table",i)
    for(let j=1 ;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}