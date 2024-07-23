//let a= "c" // small case  character.

//if it is small case console log a is small case.
// if it is capital case console log a is capital case.
function check(char){
let lower= "abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<=lower.length;i++){
    if(char===lower[i]){
      return true;
    }
    else{
      return false;
    }
  }

}
let output=check("a");
if(output==true){
  console.log("small case");
}
else{
  console.log("capital");
}


// function sum(a,b){
//   return a+b;
// }

// console.log(2+sum(2,5));

// function sub(a,b){
//   return  a-b;
// }
// console.log(sub(5,3));

//let arr=[1,2,,3,4,5];
function sum(arr){
  //let arr=[1,2,3]
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+i;
  }
}
console.log(sum([1,2]));


function check_Odd(number){
  if(number%2!==0){
    return true;
  }
  else{
     return false;
  }
}
 for(let i=0;i<=10;i++){
   let output=check_Odd(i);
 if(output===true){
   console.log(i);
 }
 }



let arr=['MMS','GEGH','JHDHDJ'];
function lower(){

let bag="";
  
for(let i=0;i<arr.length;i++){
  bag=bag+arr[i]+' ';
}
  return bag.toLowerCase();

}
console.log(lower(arr).split(" "));

let array=[];
let bag= "";
let str=lower(arr);
for(let i=0; i<str.length; i++){
  
  if(str[i] != " "){
    bag = bag + str[i];

  }
  else{
    array.push(bag);
    bag= ""
  }
}

console.log(array);



let n=1;
let arr=[[1,3],[1,2],[2,3]];

function ball(n,arr){
  for(let i=0;i<3;i++){
    if(arr[i][0]==n){
      n=arr[i][1];
    }
    else if(arr[i][1]==n){
      n=arr[i][0];
    }

  }
  return n;
}
// console.log(count);
console.log (ball(n,arr));









