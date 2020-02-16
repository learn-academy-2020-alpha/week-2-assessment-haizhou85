// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// declare a function takes in one argument
const three = (num) => {
// if num can be evenly divisible by 3, then return the message
    if (num%3 === 0) {
        return `${num} is divisble by three`
    }else {
        return `${num} is not divisble by three`
    }
}
console.log(three(num1))
console.log(three(num2))
console.log(three(num3))




// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalized = (arr) => {
//change the first letter of string to uppercase
    return arr.map(value => value.charAt(0).toUpperCase() + value.slice(1))
} 
console.log(capitalized(randomNouns))


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlySortedNums = (arr) =>{
//generate a sun array only have numbers
    let arrNums = arr.filter(value => typeof(value) === "number")
//sort the array by descending order
    return arrNums.sort(function(a, b){return a - b})
}
console.log(onlySortedNums(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3
const indexVowel = string =>{
//construct an array with all vowels
let vowels = "aeiouAEIOU"
//loop through the string until the first vowel is found
for (let i = 0; i < string.length; i++){
    if(vowels.includes(string.charAt(i))) {
        return i
        } 
    }
}
console.log(indexVowel(vowelTester1))
console.log(indexVowel(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"
const calculator = (num1, op, num2) => {
//check the nums arguments are numbers
if (typeof(num1) === "number" && typeof(num2) === "number") {
//if operation is +, then return num1+num2 to the function
    if(op === "+") return num1 + num2
//if operation is -, then return num1-num2 to the function
    else if(op === "-") return num1 - num2
//if operation is *, then return num1*num2 to the function
    else if(op === "*") return num1 * num2
//if operation is / and num2 is 0, then return Can't divide by 0!
    else if(op === "/" && num2 ===0) return "Can't divide by 0!"
//if operation is /, then return num1/num2 to the function
    else if(op === "/" ) return num1 / num2
//if operation is not on of +-*/, then return an error message
    else return "enter a valid mathematical operation (+, -, *, /)"
    } else return "enter numbers"
}


// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
