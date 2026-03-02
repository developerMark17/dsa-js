// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverse("HELLO"))

// function reverse(str){
//     let result = "";

//     for(let i = str.length-1; i>=0; i--){
//         result += str[i]
//     }

//     return result
// }

// console.log(reverse("hello"))

// function isPalindrome(str){
//     return str === str.split("").reverse().join("")

// }

// console.log(isPalindrome("madam"))


function removeD(arr){
    return [...new Set(arr)]
}

console.log(removeD([1,2,3,4,5,5,6,6]))