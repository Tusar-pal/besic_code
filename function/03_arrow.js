const obj = {
    name:"tusar",
    email:"tusarpal@gamil.com",
    welcome : function  (){
        //console.log(`${this.name} welcome this website`);
        //console.log(this);
    }

}
obj.welcome()
obj.name="akash";
obj.welcome()
//console.log(this);

// function variable diclear
const two = function (){
    //console.log("enter the your name");
}
two();

// arrow function -------------------->
const one = (num1,num2)=>{
    //console.log("enter the value ");
    if (typeof num1 === typeof num2) {
        return num1+num2;
    }else{
        console.log("check enter value");
    }
}
console.log(one(1,3));

// it is called implisite return------------------>
// mostli use in react
const add = (num1,num2) => num1+num2 ;
   // console.log(add(1,2));

// explisite return ---------------->
const two1  = (num1,num2) =>{
    return num1+num2 ;
}
console.log(two1(4,5))