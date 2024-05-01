// commented code is not buggy

// document.addEventListener("DOMContentLoaded", ()=>{
    // const num1 = document.querySelector("#num1")
    // const num2 = document.querySelector("#num2")
    // let heading = document.querySelector("h2")
    // const sub = document.querySelector(".submit")

//     const calculate = ()=>{
//         return new Promise((resolve, reject) => {
//             //asynchronous task
//             const result = parseFloat(num1.value) + parseFloat(num2.value)
//             if (isNaN(result)){
//                 reject("invalid input")
//             }
//             else{
//                 resolve(result)
//             }
//         })
//     }

//     sub.addEventListener("click", ()=>{
//         calculate().then((result) =>{
//             heading.innerHTML = `answer is ${result}`
//         }).catch((error) =>{
//             heading.innerHTML =`error: ${error}`
//         })
//     })
// })

// implementing the same using async and await
document.addEventListener("DOMContentLoaded", ()=>{
    const num1 = document.querySelector("#num1")
    const num2 = document.querySelector("#num2")
    let heading = document.querySelector("h2")
    const sub = document.querySelector(".submit")

    async function calculate(){
        try{
            const result = await parseFloat(num1.value) + parseFloat(num2.value)
            if (isNaN(result)){
                heading.innerHTML = "invalid input"
            }
            else{
                heading.innerHTML = `Answer: ${result}`
            }
        }
        catch(error){
            heading.innerHTML = error
        }
    }

    sub.addEventListener("click", ()=>{
        calculate()
    })
})


