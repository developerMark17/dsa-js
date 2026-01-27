let arr = [20,30,560,10,40,56,15];
let position = 1;


for(let i =position; i< arr.length-1; i++){
    arr[i] = arr[i+1]
    
}
arr.length = arr.length-1
console.log(arr);