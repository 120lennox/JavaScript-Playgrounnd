const h1 = document.querySelector("h1")
h1.style.color = "red"
h1.style.margin = "20px"
h1.style.fontWeight = "bold"
h1.style.fontSize = "35px"
//ADD ELEMENT ON DOM
const head = document.createElement("h1")
head.textContent = "Js exam prep"
document.querySelector("section").appendChild(head)

//DOM MANIPULATION
head.style.alignSelf = "center"
head.style.color = "green"

