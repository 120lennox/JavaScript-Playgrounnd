const btn = document.querySelector(".button1")
const button2 = document.querySelector(".button2")

function random_number(number){
    return Math.floor(Math.random() * (number + 1));
}


btn.addEventListener("click", function() {
    random_color = `rgb(${random_number(255)}, ${random_number(255)}, ${random_number(255)})`;
    document.body.style.background = random_color;
})

button2.addEventListener("click", function(){
    document.body.style.background = "white";
})