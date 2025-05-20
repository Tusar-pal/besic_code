const bankblance = 200
const bankblanceNum = new Number (200);//convert in number datatype
    console.log(bankblanceNum);
        let bankblancestring = (bankblanceNum.toString());//convert to string
             console.log(bankblancestring);
             console.log(bankblancestring.length); //calculate the lenght of the string 
                console.log(bankblance.toFixed(2));//fixed dont used the string detatype
    const folatValu = 23.845;
    console.log(folatValu.toFixed(2));// point er por 2 integer value

    const bignumber = 100000000000000000;
    console.log(bignumber.toLocaleString('en-IN'));// en-In is the indian money count form

    const new_number = 234.893;
    console.log(new_number.toPrecision(4));
    // output come 234.9  float formula

    const new_number2 = 234.123;
    console.log(new_number2.toPrecision(4));
    //output come 234.1
    
// *************************** math ***********************


// console.log(Math);
// console.log(Math.abs(-4));
 console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);