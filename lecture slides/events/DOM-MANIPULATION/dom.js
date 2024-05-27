//creating an element in DOM
const para = document.createElement("h1")
para.textContent = "Text created"
document.querySelector("section").append(para)