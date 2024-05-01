const change_btn = document.querySelector(".button1")
const reset_btn = document.querySelector(".button2")

function random_number(number){
    return Math.floor(Math.random * (number + 1))
}

function set_color(){
    const random_color = `rgb(${random_number(255)}, ${random_number(255)}, ${random_number(255)})`
    document.body.style.backgroundColor = random_color
}

change_btn.addEventListener('click', set_color)