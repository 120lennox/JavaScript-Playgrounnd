//comparison in javascript

/**
 * strings can be compared in JS. upper case letters are always less than lower case letters.
 * first alphabet letters are less than latter letters  
 */

console.log("Lennox" < "lennox"); //returns true
console.log("aaron" < "baron"); //returns true
console.log("mountain" < "mountains"); //returns true. mountains has more characters

//number comparison special case
console.log(NaN == NaN); //returns false

for(let i = 1; i < 10; i++){
    for (let k = 0; k < i; k++){
        console.log("*");
    }
    console.log("\n");
}



