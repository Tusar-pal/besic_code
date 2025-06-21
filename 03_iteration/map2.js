const num =[1,2,3,4,5,6,7,8,9,10];
const NewNum = num.map((num)=>num+10)
//console.log(NewNum);

const num1 =[1,2,3,4,5,6,7,8,9,10];
num1.forEach( (i)=>{
    console.log(i+10)
})

// chaining method

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);