const section = document.querySelector("section");

let h2 = document.createElement("h2");
let p = document.createElement("p");

h2.innerHTML = "mai hun h2";
p.innerHTML = "mai hun p";

// section.appendChild(h2);
section.append(h2,p);