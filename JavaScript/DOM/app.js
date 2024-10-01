let h1 = document.getElementsByTagName("h1");
// console.log(h1);
for(let item of h1){
    item.style.backgroundColor = "red";
}

let h2 = document.getElementById("naya");

// console.log(h2);
h2.style.color = "blue";


let para = document.getElementsByClassName("paraa");
console.log(para);
para[3].style.backgroundColor = "orange";

for(let item of para){
    item.style.fontSize = '50px';
}