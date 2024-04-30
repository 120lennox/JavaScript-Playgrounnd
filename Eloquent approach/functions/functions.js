// let heading = document.querySelector("h1");
// function change(){
//     console.log("button clicked");
//     if (heading.textContent === "Hey!"){
//         heading.innerHTML = "Lennox Start coding";
//     }
//     else{
//         heading.innerHTML = "text dont match";
//     }
// }

let heading = document.querySelector(".heading")

function clicked(){
    let name = prompt("Name: ")
    heading.textContent = `Hello ${name}`
}