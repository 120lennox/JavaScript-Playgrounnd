const message = document.querySelector(".message")

async function printMessage(){
    try {
        const messageFunc = setTimeout(()=>{
            message.textContent = "async function executed";
        }, 6000)
        const messageWait = await messageFunc;
        console.log("async function executed");
    } catch{
        
    }
}