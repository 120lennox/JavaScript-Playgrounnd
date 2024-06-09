const para = document.querySelector("p")
const head3 = document.querySelector("h3")

function handleResposne(response){
    if (!response.ok){
        throw new Error("error when parsing ")
    }
    return response.json
}

function handleData(data){
    para.textContent = `data received: ${data}`
}

function handleError(error){
    head3.textContent = `Error: ${error.message}`
}

fetch("https://www.youtube.com/watch?v=ByGJQzlzxQg")
.then(handleResposne)
.then(handleData)
.then(handleError)