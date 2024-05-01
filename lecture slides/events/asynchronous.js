// setTimeout(() => console.log("Hello world first"), 5000);
// console.log("Hello world second!")

/**
 * Techniques in Asynchronous programming
 */

//Callbacks
//These are functions thats are passed as arguments to other functions. these functions get executed once the outer function gets executed. refer example below. 
setTimeout(function(){
    alert("Executed after first function executes")
}, 6000)
//function inside setTimeout executes after setTimeout excutes

//Promises
