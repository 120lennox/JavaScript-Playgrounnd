const parag = document.querySelector("h3")

function alarm(delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise retrived")
        }, delay)
        
    })
}

//handling a promises
alarm(5000).then(
    (message)=>{
        parag.textContent = `${message}`
        parag.style.color = "green"
    }
).catch((error)=>{
    parag.textContent = `${error}`
})

