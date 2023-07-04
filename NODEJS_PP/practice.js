// let myArr=[1,2,3,4,5];

// // let newArr = myArr;

// let newArr = [...myArr]
// newArr.push(6);

// console.log(myArr);
// console.log(newArr);




// let obj1={
//     name:"Akash",
//     age:20
// }

// // let newObj = obj;
// // newObj['name']='ashok'

// let newObj = {...obj};

// newObj['name']='ashok'

// console.log(obj);
// console.log(newObj);

// let obj1 = {
//     name:"Akash",
//     age:20,
// }

// let obj2={
//     name:"Ashok",
//     age:"21",
//     university:'Lovely Professional University'
// }

// let newObj = {...obj1};

// obj1.age=22

// console.log(obj1);
// console.log(newObj);
// let newObj = {...obj1, ...obj2}

// console.log(newObj);


// let shape = "sqaure"

// switch(shape){
//     case "circle":
//         console.log("circle");
//         break;
//     case 'sqaure':
//         console.log("sqaure");
//         break;
//     case 'rectangle':
//         console.log('rectangle');
//         break;
//     default:
//         console.log("No shape found");
// }




// let i=1;       //initialization phase
 
// while(i<=10){            //Termination Condition
//     console.log(i);     
//     i+=1;               //Increament/Decreament
// }



// for(let i=2; i<=100; i+=2){
//     if(i%11===0){
//         continue;
//     }
// }



// function avgMarks(){
//     let sum=0
//     for(let i=0;i<marks.length;i++){
//         sum+=marks[i]
//     }
//     console.log(sum/marks.length);
// }

// let marks =[1,2,3,4,5];

// avgMarks(marks)






//higher order fcuntions - passing a function as a parameter to another function.


// let sum_list = (l,fn)=>{
//     let sum=0;
//     for(let i=0; i<l.length;i++){
//         return fn(sum);
//     }
// }

// console.log(sum_list([10,12,13],(sum)=>{
//     return (sum*sum)/100;
// }))




// var num= fun1((a,b)=>(a%b),2,5)


// function fun1(fn,a,b){
//     return fn(a,b);
// }

// console.log(num);


//default parameters

// function fun1(a=b,b=1,c=a+b){
//     return a+b+c;
// }

// console.log(fun1());

// if(1){
//     var i=1;
// }
// console.log(i)





//object

// var obj ={
//     name:"akash",
//     eat:()=>console.log("Hello"),
//     myName:function(){
//         return this.name;
//     }
// }

// obj.eat();




//constructor of an object


// function person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName=lastName;
// }

// var p1 = new person('Akash', 'Nagineni');
// var p2 = new person('Ashok','Nagineni');

// console.log(p1);
// console.log(p2);


// var obj ={name:"Akash"};

// console.log(obj.__proto__);


//brings a new prototype

//and we can reach it by obj.prototype


// function person(name){
//     //this={};
//     this.name=name;
//     //return this
// }

// let obj = new person('Akash');  //creates an object with the function instance





//map



// let newArr = myArr.map((value)=>value+1);

// console.log(newArr);



// //filter

// let filtArr = myArr.filter((value)=>value%2===0);

// console.log(filtArr);

// //reduce

// let reduArr = myArr.reduce((acc,value)=>acc+value);
// console.log(reduArr);


// let myArr = [1,2,3,4,5,6];

// let newArr = myArr.filter((value)=>value%2!=0);

// newArr.length>0?console.log(true):console.log(false)




//eventlisteners

// let colors =["red","green","yellow","blue"];

// let backgroundElement = document.getElementById("container")
// let btnElement = document.getElementById('btn');
// let a =0

// console.log(colors.length);

// function changeBackground(){
//     console.log(a);
//     if(a>=0&&a<colors.length){
//         backgroundElement.style.background = colors[a];
//         a+=1;
//     }
//     else{
//         a=0;
//     }
// }
// btnElement.addEventListener("click",changeBackground);



//closures


// var a = 10;

// function add(a,b){
//     return (a+b);
// }
// console.log(add(20));   //NaN


// function greeting(){
//     let msg ="Hi";

//     function sayHi(){
//         console.log(msg);
//     }
//     return sayHi;
// }


// var greet = greeting();

// greet();    //prints a Hi. 

// function greeting(msg){
//     return function adder(token){
//         return msg+token;
//     }
// }

// let hi = greeting("hi");

// console.log(hi("Yo"))    // prints hi Yo



//call backs

// function process(url){
//     console.log("Iam processing");
// }

// function download(fn, url){
//     console.log("Iam downloading");
//     fn(url);
// }

// download(process(),"url");


// var myPromise = new Promise((resolve,reject)=>{

//     //computation

//     var success = false;
//     //success 
//     if(success){
//         return resolve("Moon");
//     }else{
//         return resolve("Error");
//     }
// })

// myPromise.then((resolve)=>console.log(resolve))
// .catch((err)=>console.log(err))
// .finally(()=>{console.log('Promise completed')});


// let p = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(10);
//     },3*100)
// })

// p.then((res)=>{
//     console.log(res);
//     return res*2}
// ).then((res)=>{
//     console.log(res);
//     return res*3
// }).then((res)=>{
//     console.log(res);
//     return res*4;
// })

// p.then((res)=>{
//     console.log(res);
//     return res*2;
// })
// p.then((res)=>{
//     console.log(res);
//     return res*2;
// })
// p.then((res)=>{
//     console.log(res);
//     return res*2;
// })


// var totalFun = 3;
// var completedFun = 0;
// var numArray = [];

// let p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(10);
//         // numArray.push(10);
//         // checkMyArray(numArray);
//     },3*100)
// })

// let p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(20);
//         // numArray.push(20);
//         // checkMyArray(numArray);
//     },3*200)
// })

// let p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(30);
//         // numArray.push(30);
//         // checkMyArray(numArray);
//     },3*300)
// })


// function checkMyArray(numArray){
//     if(numArray!=null && numArray!=undefined){
//         if(numArray.length===totalFun){
//             console.log(numArray);
//         }
//     }
// }



//shortcut of this top process

// let myFinalPromise = Promise.all([p1,p2,p3]);

// myFinalPromise.then((result)=>console.log(result))
// .catch((err)=>console.log(err));



// let myStr = 'abcde';

// let strLen = myStr.length;

// let num = 1

// let input = false ;

// if(input === true){
//     let subStr = myStr.substring(strLen,num+1);
//     let strPiece = myStr.slice(0,num+1);

//     console.log(subStr);
//     let newStr = subStr+strPiece;
//     console.log(newStr);
// }
// else if(input === false){
//     let subStr = myStr.substring(0,num+1);
//     let strPiece = myStr.slice(strLen,2);

//     console.log(subStr);
//     console.log(strPiece);
//     let newStr = subStr+strPiece;
//     console.log(newStr);
// }


// var p1 = async()=>{
//     await result(1000);
//     return 10;
// }

// var p2 = async()=>{
//     await result(2000);
//     return 20;
// }

// var p3 = async()=>{
//     await result(3000);
//     return 30;
// }



// var result = async (time)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,time);
//     })
// }

// var fun = async()=>{
//     var ans = await p1();
//     console.log(ans);
//     var ans2 = await p2();
//     console.log(ans2);
//     var ans3 = await p3();
//     console.log(ans3);
// }

// fun()










