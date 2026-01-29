let arr = [10,20,30,90,40,50,60,40];
let item = 40;
let index = undefined;

for(let i =0; i< arr.length; i++){
    console.log(arr)
    if(arr[i] === item){
       index = i
       break;
    }

};

console.log(index  +" search found")