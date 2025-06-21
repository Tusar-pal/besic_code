let obj = {
    name: "tusar pal",
    gmail: "tusarpal@gmail.com",
    ph: 976543234,
    address: {
        vill: "changual",
        dist: "paschim medinipur",
        state: "west bangal",
        pin: 721301
    }
};
// for object
for (const key in obj) {
       // console.log(`${key} for ${obj[key]}`);
    }


// for array

const arr1 =[1,3,25,43,12];
for (const key in arr1) {
    //console.log(`${key} for ${arr[key]}`);
    }

// for map ----------->

let map = new Map();
// it is not eligible for in loop because this map is a not iterated 
map.set("In","India");
map.set("USA","united state of America")
map.set("AU","Australia");

for (const key in map) {
   // console.log(map[key])
}

//------------------>
//for each
const arr =["java","cpp","javascript","python"];
arr.forEach( (item,index)=>{
   // console.log(item,index)
})

// arr under object foreach use for axsis value---->

const myCoding = [
{
        name : "java",
        fileName : ".java"
} ,
{
    name : "javascript",
    fileName : ".js"
},
{
    name:"python",
    fileName : ".py"
}
]
myCoding.forEach ( (item , index)=>{
    console.log(item.fileName,item.name)
})