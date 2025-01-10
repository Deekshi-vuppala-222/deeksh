

//    let i=1;
//    let n=5;
//    do{
//        i++;
//        console.log("good moring");
//    }while(i>=n)

//    for(let i=1;i<=10;i++){
//        if(i==5)continue;
//        console.log(i);
       
//    }

//    function addToCart(){
//        alert("Product is added to cart");
//    }

// function demo(){
//     console.log("function without parameters");
// }
// demo();

//function with paarameters:

// function userDetails(name,age,city){
//     console.log(name,age,city);
// }
// userDetails("deeksh",19,"hyd");

//Anonymous function
// function(){
//     console.log("Anonymous function");
// }
// ();

//function expression:
// let x=function(){
//     console.log("ANonymous");
// };
// x();

//IIFE:
// !Arrow function
// function demo()
// {
//     console.log("Hello");
// }
// demo();

// let x=()=>{console.log("Arrow Function");};
// x();
//optimized
// let x=_=>{console.log("Arrow Function");};
// x();

// let x=(a,b)=>{console.log(a+b);};
// x(6,5);

// let x=_=>{
//     console.log("Hi");
//     console.log("Hello");
//     console.log("Bye");

// }
// x();

//! return statement:(explicit)
// function demo(a,b){
//     return a+b;
// }
// let x=demo(5,5);
// console.log(x);

// let y=(a,b) => a+b;
// let a=y(10,20);
// console.log(a);
//! higher order function:
// function   hof(a){
//     return a;
// }
// let a=  hof([1,2,3,4,5]);
// console.log(a);

// function parent(callback){
//     return callback;
// }
// let x=parent(add(5,5));
// console.log(x);

// function add(a,b){
//     return a+b;
// }

//! closure:
// var a=100;
// let b="hi";
// function x(){
//     var user ="Deeksh";
//     let company="Capgemini";
//     const sal=12345
//     console.log(user);
//     console.log(company);
//     console.log(sal);
//     console.log(a,b);

// }
// x();
