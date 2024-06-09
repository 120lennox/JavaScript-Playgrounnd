//creating an element in DOM
const para = document.createElement("h1")
para.textContent = "Text created"
setTimeout(()=>(document.querySelector("section").append(para)), 5000)
console.log("10 sec to append message")

//perfom same operation using promises
const myPromise = new Promise((resolve, reject) =>
    //first function for promise
{
    //second function to perfom asynchronous operation
    setTimeout(()=>{
        resolve("success")
    }, 10000)
})

myPromise.then((result) =>{
    console.log(result)
}).catch((error) => {
    console.error(error)
})

async function setAlarm(name, delay){
    try{
        const alarmPromise = alarm(name, delay)
        
    }
}