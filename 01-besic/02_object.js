// let obj ={
//     name : "tusar",
//     roll : 10700123183,
//     gmail : "tusarpal97@gmail.com" , 
//     "full name" : "tusar pal"
// }
// console.log(obj["name"]); // it is used for a ( object value axis)


const mySym1 = Symbol("key1");// key value of symbol
const obj1 = {
    [mySym1] : "key1",
    name: "tusar",
    gmail1: "tusarpal@97gmail.com",
    "full name" : "tusar pal",
    age : 21 ,
    "parsuing course" :"computer scinece and engineering",
    "address" : "Kharaghpur ,paschim midinipur , west bengal",
}

console.log(typeof obj1["mySym1"]);
console.log(typeof [obj1.mySym1]);  // ( symbol object value axis)


// when dont change the object valuethen you freeze the object 

obj1.gmail1 = "akashpal@82gmail.com"
Object.freeze(obj1); // freeze the object
obj1.name="akash";
console.log(obj1);

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());