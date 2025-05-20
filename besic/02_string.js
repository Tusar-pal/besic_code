// string interpuliution

let num = "tusar";
let age = 21;
//let out = console.log(`My name is ${num.toUpperCase()} and my age ${age}`);

// string difind 1st process
const str2 = ["tusar" ];
//console.log(typeof str2);


//string difind 2nd process
const str1 = new String ("tusar-pal");
// console.log(str1.toUpperCase())
// console.log(str1.charAt(3))//index 3 number whoes string are store
// console.log(str1.indexOf("u"));//index number find for "u"!

const string = str1.substring(0,str1.length());
console.log(string);
let len = str1.length();
const newstring =str1.slice( -len, 0)
console.log(newstring);