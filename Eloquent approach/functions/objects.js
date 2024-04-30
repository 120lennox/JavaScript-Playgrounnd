//mutable objects
/**
 * mutability: ability to change value of variables or bindings. in this case we can change the value of objects
 */
let object1 = {value:1}
let object2 = object1
let object3 = {value: 1}

console.log(object1 == object2)
//=>true
console.log(object1 == object3)
//=>false
object1.value = 10
console.log(object2.value)
//=>10