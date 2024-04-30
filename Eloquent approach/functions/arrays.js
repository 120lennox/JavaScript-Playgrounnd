//commented code is not buggy, just dont want it to display anything on console
//accessing arrays
const numbers = ["x", 2, 3, 4]
const names = ["Lennox", "dell", "Jacques", 2, 4]
// console.log(numbers.x)

//array length
// console.log(numbers.length)
// console.log(names["Lennox"])
// console.log(names.length)
// console.log(names[0])

let tasks = {
    smaller_tasks: ["wash", "study", "flex"],
    lager_tasks: false,
    numbers: [1, 2, 4, 5]
}

for (let i = 0; i < tasks.smaller_tasks.length; i++){
    // console.log(tasks.smaller_tasks[i])
}

// console.log(tasks.smaller_tasks[0])
// tasks.smaller_tasks.push("pushed..")

// in operator 
console.log("wash" in tasks.smaller_tasks)
delete tasks.lager_tasks
console.log("larger_tasks" in tasks)


