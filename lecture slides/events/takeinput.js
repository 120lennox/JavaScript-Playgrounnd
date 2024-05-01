const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
let heading = document.querySelector("h2")
const sub = document.querySelector(".sumbit")

const calculate = () => {
    const result = parseInt(num1.value )+ parseInt(num2.value)
    heading.innerHTML = result
}

sub.addEventListener("click", calculate)
