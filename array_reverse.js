// let arr = [1,2,3,4,5]
// let result =[];

//reverse 

// for(let i = arr.length-1; i>=0; i--){
//     result.push(arr[i])

// }

// console.log(result);



let arr = [1,2,3,4,5];
let position= 2;


for(let i = position; i<= arr.length-1; i++){
    arr[i] = arr[i+1]

}

arr.length--
console.log(arr);
