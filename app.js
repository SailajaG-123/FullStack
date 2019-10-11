
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
//var array =['java','Reactjs','Nodejs'];
//var array1 =new Array('java','Javascript','AWS');
//var array3 =Array.of('java','SQL');
//var array4 =Array(3);

//console.log(array);
//console.log(array1);
//console.log(array3);
//console.log(array4);

//console.log(typeof(array1),typeof(array),typeof(array3));

//console.log(Array.isArray(array1));
//console.log(Array.isArray(array3));
//console.log(Array.isArray(array4));
//var array5 ="Hello";
//console.log(Array.isArray(array5));

//String to Array
//var str ="hello Javascript and nodejs";
//var strwithArrary = str.split('');
//console.log(strwithArrary);

//var es6way =Array.from(str);
//console.log(es6way);

//let [...spread] = str;
//console.log(spread.join(''));

//Concat:
//let array6 =['ECE','EEE','CSE'];
//let array7 =['MEC','CIVIL'];
//let concatArray =array6.concat(array7,'AI');

//console.log(concatArray);

//Reverse the String:
//var string="Hello javascript";
//var strwithArray1 =[...string].reverse().join('');
//console.log(strwithArray1);

//OBJECTS:
//-Literal way (1st Way0:
//let Users = {
  //  name : "ANU",
    //age : 20,
    //company : "CGI",
    //skils : ['java','javascript','SQL'],
    //salary : 10000
//};

//console.log(Users['name']);
//console.log(Users.age);
//console.log(Users.skils);

//Constructer Way:
//let obj = new Object();
    //obj.name = "MANU";
    //obj.age = 20;
    //obj.company ="CGI";
    //obj.skills =['java','javascript','SQL'];

   // console.log(obj);

//
//let name ="Prince";
//let age = 20;
//let company = "TFI";

//let Userdata ={
    //key : value
    //name : name,
    //age :age,
    //company : company,
    //salary : 20000
//};
    //console.log(Userdata);
//ES-06:
//let Userdata1 ={
    //name,
    //age,
    //company,
    //salary : 20000
//};
    //console.log(Userdata1);

//{
    //console.log('hello javasciript');
//} //this is  not object this is IIFE(Immediate Invoke Function Expression) in ES6

//var obj ={
    //key : value
//}//this object

//How to create multiple Objects ?
//Arrays are used to store multile Objects
//var Users1 = [
    //{
        //name :"Anu",
        //age :20,
        //company :"TFI",
        //salary :20000,
        //gender:"female",
        photo :"path"
    //},
    //{
        //name :"Manu",
       // age :21,
        //company :"CGI",
        //salary :21000,
        //gender:"male",
        //photo :"path"
   // },
   // {
       // name :"Prince",
       // age :26,
      //  company :"TFI",
       // salary :600000,
       // gender:"male",
       // photo :"path"
    //}
//];
   // console.log(Users1);
    //console.log(Users1[0]);

//We can use Reserved keywords in JS objects 

//05-10-2019:
//let Users2 ={
    //name :'anu',
    //age :20,
   // company : 'CGI',
//};
    //Users2.name = "NAni";

    //console.log(Users2);

//Object.create() method:
//let me = Object.create(Users2);
    //me.name ='manu';
   // me.age =20;
   // me.salary = 200000;

   // console.log(Users2);
   // console.log(me);

//Object.entries() method:
//let emp ={
   // id:1,
   // 'emp-name':'manoj',
    //'emp-company':'cgi'
//};
//let empconvertasArray = Object.entries(emp);
//empconvertasArray.forEach(element => {
    //console.log(element);
//});

//Object.freeze() method:
//let Obj = {
    //prop : 42,
    //name : 'Guldu',
    //company : 'CGI'
//};
    //Object.freeze(Obj);
      //  Obj.name = 'Keerthi';

      //  console.log(Obj);//Expected output = company: "CGI"
                                              //name: "Guldu"
                                              //prop: 42
      //  console.log(Obj.name);//Expected output = Guldu

//Object.alldata() method:
//let emp ={
   
   // 'emp-name':'manu',
   // 'emp-loc':'Blore',
    //'emp-age':20,

    //alldata(){
        //console.log(`${this['emp-name']} and 
        //${this['emp-age']} and 
        //${this['emp-loc']}`)
   // }
//};

    //console.log(emp.alldata);
//Object.values() and Object.keys() methods:
//let Student={
    //name : 'Keerthi',
   // age :21,
   // company:'Huwai'

//};

//let ArrayKeys = Object.keys(Student);
//let ArrayValues = Object.values(Student);

    //console.log(ArrayValues);
    //console.log(ArrayKeys);



//09/10/2019:
//function number(){
    //let args = arguments;
    //console.log(args);
    //console.log(Array.isArray(args));//false Because it is Array like Object
    //console.log(typeof args);

    //let [...checkspread] = args;//[...]operator using fginal Arrayor converting Array like Object Into Ori
    //let ArrayFrom = Array.from(args);
    //console.log(typeof checkspread); //Object
    //console.log(Array.isArray(checkspread));//True it is Original Array
  

   // console.log(arguments);
    
//}

//number (1, 2, 3, 4, 5,7,8,9,10);

//Function Closure in JavaScript:
// var simpletext = 'Hello Simple text ';
// function jspiders(){ //local Scope
//     let jspidertext = 'Hello local scope';

//     console.log(simpletext);
//     console.log(jspidertext);

//     function developers(){ //local scope within a function
//         let developertext = 'Hello Developers How are You (Function within a Function )';
//         console.log(developertext);

//         console.log(jspidertext);//Clouser here
//    }//called
//     developers();//calling developers
// }
// jspiders();//calling jspiders here 

// function Parent(callback){
//     console.log('Hello H R U ?');
//     callback();
// }
// Parent(function(){
//     alert('Hello Nani');
// })

//Function Hoisting:
//Naming Function:It will work
// sachin();
// function sachin(){
//     console.log('hey sachin how are you?');
// }
 
// //Function Ecpression Hoisting will not Work:
// dravid();
// var dravid = function(){
//     console.log('hey Dravid how are you?');
// }

//Arrow Function(ES-06):
// let Username = () => {//if no Parameter remove brackets() instead use Underscore(_).
//     console.log('Username here');
// }
// Username();

// let Password = () => console.log('Password here');//If one line block remove Curly braces.
// Password();

// let email = (email) => {
//     return email;
// }//es6 return type with parameter.
// console.log(email('sailu.g@gmail.com'));

// let email1 = email => email;//If one line block remove Curly braces,brackets  and return statement..
//     console.log(email1('sailu1.g@gmail.com'));

//No bindings in ES6:
// let Users = {
//     name : 'manu',
//     age : 20,
//     company : 'TFi',
//     details : function(){
//         console.log(`hello my name is ${this.name} and my age is ${this.age} and i worked for ${this.company}`);
//     }
// };
// Users.details();

// //ES06 will not work with 'this keyword instead use 'Function name :
// let Users1 = {
//     name : 'manu',
//     age : 20,
//     company : 'TFi',
//     details : () => {
//         console.log(`hello my name is ${Users1.name} and my age is ${Users1.age} and i worked for ${Users1.company}`);
//     }
// };
// Users1.details();
    
//Argument Object will not work wiyh Arrow Function :
// let numbers = () => {
//     console.log(arguments);
// };
// numbers(10,20,23,51);//ERROR:app.js:368 Uncaught ReferenceError: arguments is not defined

// let numbers1 = function() {
//     console.log(arguments);
// };
// numbers1(10,20,23,51);//Output : Arguments(4) [10, 20, 23, 51, callee: ƒ, Symbol(Symbol.iterator):

//Rest Parameter:
    // let numbers2 = (...rest) => {
    //     console.log(rest);
    //     console.log(typeof rest);
    //      console.log(Array.isArray(rest));
    // };
    // numbers2(10,20,23,51);

    // let es5 = function () {
    //     console.log(arguments);
    //     console.log(typeof arguments);
    //      console.log(Array.isArray(arguments));
    // };
    // es5(10,20,23,51);


// //ARRAY METHODS :
// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     lang.forEach(function (items) { //forEach() method can be used only with Arrays
//         console.log(items);
//     });

// var str ='hello javascript';
//     [...str].forEach(function (items) { //[...]spread operator can be used to string into Array.
//         console.log(items)
//     });

//Normal for loop:
// for(let i=0;i<lang.length;i++){
//     console.log(lang[i])
// }
//let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
// lang.forEach((value, index,array) =>{
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });

//for of Loop :
// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     for (let x of lang){
//         console.log(x);
//     }

// let str = 'hello Javascript';
//     for(let y of str){
//         console.log(y);
//     }
//     console.log(typeof str);

//POP and DELETE:
// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     console.log(lang);
// var popx = lang.pop();
//     console.log(popx);
//     console.log(lang);

// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     console.log(lang);
// var test = delete lang[3];
//     //console.log(test);
//     console.log(lang);

//
//let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
    // lang.shift();
    //     console.log(lang);

    // lang.unshift('Javascript','HTML & CSS3')
    //     console.log(lang);

    // lang.push('firebase')
    //     console.log(lang);

   // lang.splice(0);
     //   console.log(lang); //It will remove all values 

    //  lang.splice(3,1,'DOM');
    //     console.log(lang);

//11/10/19 :
//fill and include methids :

// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     //lang.fill('Nani');
//     console.log(lang);

//     let test = lang.includes('nodejs');
//     if(lang.includes('nodejs'))
//     {
//         alert('Nodejs is Present here...');
//     }
//     else {
//         alert('no it is not present here...');
//     }

//reduce()  method :
// var numbers = [10,20,30,40,50,60,70,80,90,500,1000,50000];
//     var reduce = numbers.reduce(function (a,b) {
//         //console.log(a);
//         //console.log(b);
//         return a+b;
//     })
//     console.log(reduce);

//Using fat Arrow function :
// var numbers = [10,20,30,40,50,60,70,80,90,500,1000,50000];
// var reducewithfarArrow = numbers.reduce((a,b)=> a+b)
//     console.log(reducewithfarArrow);
    //console.log(reduce);

//Sort() method :
//Using string :
// let lang = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
// let sortedarray= lang.sort();
//     console.log(sortedarray);

// //Using numbers :
// var numbers =[10,20,51,25,14,17,11,500,166000,1500];
// var sortwithnumbers = numbers.sort((a,b) => a-b) //ascending order
//     console.log(sortwithnumbers);

//     var numbers1 =[10,20,51,25,14,17,11,500,166000,1500];
//     var sortwithnumbers1 = numbers1.sort((a,b) => b-a) //descending order
//         console.log(sortwithnumbers1);

//filter() method :
// let array = ['nodejs','angular','expressjs','Reactjs','mongoDB','VUEjs'];
//     var resultwithes5 = array.filter(function (word) {
//     return word.length >7;
//     });

//     var resultwithes6 = array.filter(word => word.length >7);

//     console.log(resultwithes5);
//     console.log(resultwithes6);
//     console.log(array);

//To remove duplicate values from an Array using filter() method
// var array = ['mongoDB','nodejs','angular','nodejs','angular','expressjs','Reactjs','mongoDB','mongoDB','mongoDB','mongoDB','mongoDB','VUEjs'];
//     var es5way = array.filter(function(value,index,array){
//         // console.log(array);
//         // console.log(index);
//         // console.log(value);

//         return array.indexOf(value)==index;
//     });
//         console.log(es5way);
//     var array1 = ['mongoDB','nodejs','angular','nodejs','angular','expressjs','Reactjs','mongoDB','mongoDB','mongoDB','mongoDB','mongoDB','VUEjs'];
//     var [...es6way] = new Set(array);
//         console.log(es6way);

//Map() method :
// var numbers = [1,3,5,10];
// var result =numbers.map(x => x*5);
// var foreachway = numbers.forEach(x => {
//     return x*5;
// });
//     console.log(foreachway);
//     console.log(result);
//     console.log(numbers);

//reverese() method :
// var numbers = [1,2,3,4,5];
//     var result = numbers.reverse();
//         console.log(result);

// var str = ['sachin','dravid','dhoni','malinga'];
//     var result1 = str.toString();
//         console.log(result1);
//     var result2 = str.join(' ');
//         console.log(result2);

//     let [...strtoArray] = result2;
//     let str1 = strtoArray.reverse().join('');
//         console.log(str1);
//         console.log(typeof result2); 

function Username(name) {
    return [...name].reverse().join('');
}
console.log(Username('anu').toUpperCase());
 



















































































































