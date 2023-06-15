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



//web API's


