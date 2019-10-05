
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
let emp ={
   
    'emp-name':'manu',
    'emp-loc':'Blore',
    'emp-age':20,

    alldata(){
        console.log(`${this['emp-name']} and 
        ${this['emp-age']} and 
        ${this['emp-loc']}`)
    }
};

    console.log(emp.alldata);
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



















































































































































