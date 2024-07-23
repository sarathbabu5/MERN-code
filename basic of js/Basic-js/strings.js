//1. given a array, find the count of words whose characters start with letter g;

// let arr= ["goku", "gohan", "gon", "luffy","google","oogle", "name", "sanji"];

// let count=0;

// for(let i=0; i<arr.length; i++){
//   // console.log(arr[i]);
//   let arrr=arr[i];
//   for (let j=0;j<arrr.length;j++){
//   if(arrr[0] === 'g'){
//     count++;
//     break;
//   }
//   }
   
//  }
//  console.log(count);


// let str= "go%.a$.";
// let str2=  " ";
// for(let i=0;i<str.length;i++){
//   if(str[i]=== "%"){
//     str2=str2+"h";
//   }
//   else if(str[i] === "$"){
//     str2 =str2 + "n";
//   }
//   else if(str[i] ==="."){
//     str2= str2 + "";
//   }
//   else{
//     str2= str2 + str[i];
//   }
// }
// console.log(str2);
let a='i am iron man';
let sum=0;
let count=0;
for (let i=0; i<=a.length-1;i++){
  if(a[i]===' '){
    count++;

     count=count * count;
    console.log(count)
     sum=sum+count;
  }
}

console.log(sum);


// let str="nrupl";
// for(let i=0; i<str.length;i++){
//   console.log(str[i]);
// }

// let str="nrupl";
// for(let i=str.length-1; i>=0;i--){
//   console.log(str[i]);
// }


// let str="nruple";

// for(let i=0; i<str.length;i++){
//   if(i%2!==0){
//     console.log(str[i]);
//   }
  
// }


// let str="nruple";

// for(let i=0; i<str.length;i++){
//   if(i%2===0){
//     console.log(str[i]);
//   }

// }



// let str="nruple";
// let  count=0;
// for(let i=0; i<=str.length;i++){
//   if(str[i]==="a"||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//     count++;
//   }
// }
// if(count>1){
//   console.log(true);
// }
// else{
//   console.log(false);
// }



// let str="nruple";
// let  count=0;
// let count1=0;
// for(let i=0; i<=str.length;i++){
//   if(str[i]==="a"||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//     count++;
//   }
//   else{
//     count1++;
//   }
// }
// console.log(count);
// console.log(count1);

let str='naman';
let str1="";
for(let i=str.length-1;i>=0;i--){
  str1= str1+str[i];
 
  
}
if(str===str1){
  console.log(true);
}
else{
  console.log(false);
}

