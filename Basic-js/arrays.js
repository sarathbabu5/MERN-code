

 let n="hi everyone how are you";
// find how many words are there in a  sentence.
// count=0;
// for(let i=0; i<n.length;i++){
  
//   if(n[i]=== " "){
//     count++;
//   }
// }
// console.log(count);


 given an array of string count the overall total number of letter.

let arr=["mahesh", "hyderabad"]
let letter = 0;
for (let i = 0; i < arr.length; i++) {
  letter = letter + arr[i].length;
}
console.log(letter);

// let n=[5];
// let arr=[1, 2, 3, 4 ,5];
// for(let i=0; i<arr.length; i++){

//   console.log(arr[i]);
// }


let n=[5];
let arr=[1, 2, 3, 4 ,5];
for(let i=arr.length-1; i>=0; i--){

  console.log(arr[i]);
}




// let n=[5];
// let arr=[1, 2, 3, 4 ,5];
// for(let i=0; i<arr.length; i++){
// if(arr[i]%2!=0){
//   console.log(arr[i]);
// }
// }

// let sum=0;
// let n=[5];
// let arr=[1, 2, 3, 4 ,5];
// for(let i=0; i<arr.length; i++){
// if(arr[i]%2==0){
//   sum=sum+arr[i];
// }
// }
// console.log(sum);


// let min= +Infinity;;
// let n=[5];
// let arr=[ 2, 3, 4 ,5,1];
// for(let i=0; i<arr.length; i++){

//   if(min> arr[i]){
//     min =arr[i];
//   }
  
// }
// console.log(min);


let  arr1=' ';
let n=[5];
let arr=[1, 2, 3, 4 ,5];
for(let i=1; i<=arr.length; i++){

arr1=arr1+i+" ";
}
console.log(arr1);

