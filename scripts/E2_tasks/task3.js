let string = 'Hello';


function reverseString(inpString){
    return inpString.split("").reverse().join("")
}

console.log(`${reverseString(string)}`)