let array = [10, 24, 56, 72,-10,-88,100,564];

let result = array.reduce(function ( element,sum) {
  if (element % 2 !== 0) {
    sum =  element+sum;
  }
  return sum;
}, 0);

console.log(result);


// let arr='I AM IRON MAN';
// let count=0;
// let sum=0;
// for(let i=0;i<=arr.lenght-1;i++){
//   if(arr[i]==' '){
//     count++;
//     count=count * count;
//     sum=sum+count;
//   }
// }
// console.log(sum);
let arr=[10,20,30,45,56];
let sum=0;
let arr1=arr.map((ele)=>{
  if(ele%2==0){
    sum +=ele;
  }
})
console.log(sum);