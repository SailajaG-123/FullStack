
//var str = "Hi";
//var str1 = 'Hello';
//var str2 = `How are you`;//Template String(ES-6 onwards)
//var str3 =`
//<h1>Hello</h1>
//<p>Lorem Is ............</p>
//<button>Clickme</button>
//<input type="text" placehloder="Enter text"/>
//${5+5}`;


//document.write(str3);

//Secoond EX:
//var name="Nani";
//var age =20;
//var company ="Infosys";

//document.write (`My name is ${name} and My age is ${age} and I worked for ${company}` )  ;

//How to check Datatype:
//var name ="Nani";
//var age =20;

//console.log (typeof name);
//console.log (typeof age);

//Number Data type:
//var num=1;
//var num1=10.90;
//var num2=1/1;

//console.log (typeof num);
//console.log (typeof num1);
//console.log (typeof num2);

//NaN :Not a Number:
//var name="Ani"/0;

//console.log (typeof name);

//For looping
//for (var i = 0 ; i < 10 ; i++)
//{
       // var name = "Sachin";//Global Scope
        //console.log(i);
//}
   // console.log(name);

//for (let i = 0 ; i < 10 ; i++)
//{
       // let name ="nani";//Local Scope
      //  console.log(i)
//}        
    //console.log(name);

//03/10/19 :
//Non-primitive Datatypes or Object reference....:
//1.Arrays
//let languages =['JavaScript',"Ruby",'Python','Node.js','Java',10,undefined,null];

//console.log(languages.length);
//console.log(languages[0]);
//console.log(languages[2]);
//Array can Define in 4 ways:
var array =['java','Reactjs','Nodejs'];
var array1 =new Array('java','Javascript','AWS');
var array3 =Array.of('java','SQL');
var array4 =Array(3);

console.log(array);
console.log(array1);
console.log(array3);
console.log(array4);

console.log(typeof(array1),typeof(array),typeof(array3));

console.log(Array.isArray(array1));
console.log(Array.isArray(array3));
console.log(Array.isArray(array4));
var array5 ="Hello";
console.log(Array.isArray(array5));

//String to Array
var str ="hello Javascript and nodejs";
var strwithArrary = str.split('');
console.log(strwithArrary);

var es6way =Array.from(str);
console.log(es6way);

let [...spread] = str;
console.log(spread.join(''));

//Concat:
let array6 =['ECE','EEE','CSE'];
let array7 =['MEC','CIVIL'];
let concatArray =array6.concat(array7,'AI');

console.log(concatArray);

//Reverse the String:
var string="Hello javascript";
var strwithArray1 =[...string].reverse().join('');
console.log(strwithArray1);





















































































































































