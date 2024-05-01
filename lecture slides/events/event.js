const change_btn = document.querySelector(".button1");
const reset_btn = document.querySelector(".button2");

function random_number(number){
    return Math.floor(Math.random() * (number + 1)); //missed () on Math.random
}

function set_color(){
    const random_color = `rgb(${random_number(255)}, ${random_number(255)}, ${random_number(255)})`;
    document.body.style.backgroundColor = random_color;
}

function reset_color(){
    document.body.style.backgroundColor = "initial";
}

change_btn.addEventListener('click', set_color);
reset_btn.addEventListener('click', reset_color);