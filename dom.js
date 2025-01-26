// console.log(10);
// let element=document.getElementById("demo");
// element.innerText="G+";
// console.log(element);

// let ele=document.getElementById("test");
// ele.innerText="<h1>header</h1>"
// console.log(ele);

//!
// let ele=document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"

// //ele[0].style.backgroundColor="tomato"

// //!Spread operator:-it will takeout each and every value from the original array.
// //!and store it inside one more new array(pure array)
// //? syntax:-[...variable]

// let x=[...ele];
// //console.log(x,Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundColor="orange"
// })

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// ele[0].style.backgroundColor="tomato"

// //! spread operator:- itwill takeout each and every value from the original array
// //! and store it inside one more new array(pure array).

// let x=[...ele];
// x.map(element=>{
//     element.style.backgroundColor="orange"
// })

// let ele=document.getElementsByTagName("div");
// console.log(ele);

// let ele=document.getElementsByTagNameNS("test")
// console.log(ele);

// let ele=document.getElementsByName("formData");
// [...ele].map(inp=>{
//     console.log(inp.value);
    
// })
// let ele=document.querySelector("mru");
// console.log(ele);


// let btn=document.querySelector("#btn");
//!add event listener("event",(=>{}))
    // btn.addEventListener("click",()=>{
    //     console.log("click");
        
    // })

let btn=document.querySelector("#btn");
btn.addEventListener("dblclick",()=>{
    console.log("double click");
    
})