
let num=7;
let k=2;

for(let i=1; i<=num;i++){

   if(i%k==0){
    
   
console.log(i);
     
   }

}


let num=7;
let k=2;

let sum=0;
for(let i=1; i<=num;i++){

   if(i%k==0){


    
     sum=sum+i;

   }

}
console.log(sum);


let num=3;

let range=0;
for(let i=1; i<num;i++){
  
  
console.log(i);

}


if(num%3==0 && num%5==0){
  
    console.log("FizzBuzz");
  
}
  else if(num%3==0){
    console.log("Fizz");
  }
  else if(num%5==0){
    console.log("Buzz");
  }
  else{
    console.log(num);
  }


let n=3;
let k=10;
let y=5;
let sum=0;

let p=0;
for(let i=1; i<=k; i++){
  p=n*i;
  
 if(p%y===0){
   
   sum=sum+p;
  
  
}
}
console.log(sum);


// if(product%y==0){
//   sum=product;
//   console.log(sum);



let left=1;
  let right=10;
    let k=3;
    let count=0;
for(let i=left; i<=right;i++){
  
  if(i%k==0){
    count++;
  }
}
console.log(count);
