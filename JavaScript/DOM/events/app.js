const button = document.querySelector("button");
const bodyEl = document.querySelector("body");
// const input = document.querySelector("input");

function doSomething(){
    // console.log("me hun doremon");
    bodyEl.style.backgroundColor = "red";
}

// button.onclick = function(){
//     console.log("heloo jiii");
// }

button.addEventListener('click', function(){
    // console.log("mujhe smj agya");
    bodyEl.style.backgroundColor = "red";
})


// input.addEventListener('input',function(event){
//     // console.log("hello world")
//     console.log(event.target.value);
    
// })