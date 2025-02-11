console.log("hello world");
console.log("vanshika");
console.log("yuvi pagal");

const accountId=12345; //cant change
let accountemail="GamepadHapticActuato"; //change
// var avgfg="vghgfgh" //change
city="del"
let accountstate;

console.log(accountId);
console.table([accountId, accountemail,  accountstate, city]);

// alert(3+3) we are using nodejs not browser

let name="vm";
let age=90;
//number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
//symbol=> unique

//object

console.log(typeof "vm");
console.log(name)
console.log(age);

console.log(typeof null);//object //interview
console.log(typeof undefined);//undefined
//typeof in interviews

//conversion

let score="33abc"
console.log(typeof score);
console.log(typeof(score));
  
let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN after conversion value

let scoree=null
console.log(typeof scoree);
console.log(typeof(scoree));
  
let valuenNumber= Number(scoree)
console.log(typeof valuenNumber);
console.log(valuenNumber);//0
// undefined=Nan
// true=1
// false=0
// string=nan


//in boolean conversion
//1=true
// 0=false
// ""=false
// "vm"=true


//operations

let value=3
let negvalue= -value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hi"
let str2=" vm"
str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

//ECMAscript

// console.log(+true);
// console.log(+"");


// let num1, num2, num3
// num1=num2=num3=2+2


// prefix postfix
//mdn js
let gamecounter=100
// gamecounter++;
// console.log(gamecounter);
++gamecounter;
console.log(gamecounter);

//comparison
 console.log("//comparison")
// console.log(2<1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


// console.log("2">1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the reason is that an equality check == and comparison > < >= <= work differently.
// comparison convert null to a Number, treating it as 0.
// that's why (3)null >=0 is true and (1) null>0 is false

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// === (strict check)

console.log("2"===2);


// *****summary***** \\
// how to put data and access them in memory

// primitive 
//7 types: string, number, boolean, null, undefined, symbol, bignit
const scor=100
const scorValued=100.3
const isloggedIn=false
const outsideTemp=null
let userEmail;//undefined
console.log("//symbol");
const id =Symbol('123')
const anotherID=Symbol('123')
console.log(Symbol);
console.log(id===anotherID);
const bigNumber=345475854846336464n

//reference (non primitive )
//array, objects, functions

const heros=["batman","spiderman","antman"];

let myOBJ={
    name: "vanshika",
    age: 20,
}

const myFunction= function(){
    console.log("hello");
    
}
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myOBJ);

//primitive
console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof isloggedIn);
console.log(typeof scorValued);

// non primitive ka returntype object datatype (object)




///statically typed or dynamically typed??

// "use strict";

//stack and heap memory 
// stack(primitive), heap(non-primitive)
//stack me variable declare me copy milta h aur heap me milta h reference

let name1="vanshika malik"
let name2=name1
name2="vanshi"

console.log(name1);
console.log(name2);
//stack

let userOne ={
    email:"vanshi@gmail.com",
    upi:"user@ybl"
}
console.log(userOne);

let userTwo=userOne
userTwo.email="vm@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne);
console.log(userTwo);

//String in javascript
const NAME="vanshika"
const lastname="malik"

// console.log(NAME+ lastname+" hi");
console.log(`hi my name is ${NAME} and last name ${lastname}`);

const gamename = new String('hiji')
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(1));
console.log(gamename.indexOf('j'));
console.log(gamename.anchor());
console.log(gamename.at(0));
console.log(gamename.big());
console.log(gamename.blink());
console.log(gamename.bold());
console.log(gamename.charAt());
console.log(gamename.charCodeAt());
console.log(gamename.codePointAt());
console.log(gamename.concat());
console.log(gamename.toLowerCase());
console.log(gamename.toUpperCase());
console.log(gamename.trim());
console.log(gamename.trimEnd());
console.log(gamename.trimStart());
console.log(gamename.toString());
console.log(gamename.split());
console.log(gamename.search());
console.log(gamename.substring(0,2));
console.log(gamename.slice(0,1));


const gamename1=new String(" bye ")
const gamename2=new String("hi-hello-bye")
console.log(gamename1.trim());
console.log(gamename1.trimEnd());
console.log(gamename1.trimStart());

const url="https://www.20%youtube.com/"
console.log(url.replace('20%',"-"));
console.log(url.includes('www'));
console.log(gamename2.split("-"));




//string methods interview mdn pe kerna h


//number and math

const score1=400
console.log(score1);

const balance=new Number(100)
console.log(balance);

console.log(typeof(balance.toString()));
console.log(balance.toString().length);
console.log(typeof(balance))
console.log(balance.length);

console.log(balance.toFixed(2));

const score2=400.89
console.log(score2.toPrecision(3));
//401

const hundreds=100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//maths
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(6,4,3,2,1));
console.log(Math.max(6,4,3,2,1));

console.log(Math.random());
//0-1 ke beeche me hi value
console.log((Math.random()*10)+1);


const min=10
const max=20

Math.random()*(max-min+1)
//math kerna h
//increment decrement kerna h

//date and time
let mydate=new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toUTCString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleTimeString());

console.log(typeof mydate);//interview


let mycreateddate=new Date(2023,0,23)
console.log(mycreateddate.toDateString());

let mycreateddate1=new Date(2023,0,23,5,3)//jan start with 0
console.log(mycreateddate1.toLocaleString());


let mycreateddate2=new Date("2023-01-14")//jan start with 1
console.log(mycreateddate2.toLocaleString());

let mytimestamp= Date.now()
console.log(mytimestamp);

console.log(mycreateddate2.getTime());

console.log(Date.now());



