let students=  ["goku", "gohan", "piccalo","chichi"];

let score= [40,34,32,67];

//convert this obove array into below format.

// [
//   {name:"goku", score:40},
//   {name:"gohan", score:34},
//   {name:"piccalo", score:32},
//   {name:"chichi", score:67},
// ]
let arr=[10,10,20,20,10,30]
let obj = {};
  for(let i=0;i<arr.length;i++)
    if(obj[arr[i]]==undefined){
      obj[arr[i]]=1;
    }
else{
  obj[arr[i]]++;
}
for (let key in obj){
  if(obj[key]==1){
    console.log(key)
  }
}
  

//   student2: {
//   name:"gohan",
//   score:37
//   },
//  student3 : {
//   name:"piccalo",
//   score:32
// },
//  student4 : {
//   name:"chichi",
//   score:67
// }
// }
// let array = [];
// for (let key in object) {
  
   
//     array.push(object[key]);
  
// }
// console.log(array);

//  let result = [];

// for (let i = 0; i < students.length; i++) {
//   let obj = {};
//   obj.name = students[i]; 
//   obj.score = score[i];

//   result.push(obj);
// }
// console.log(result);


// var data2 = {
// name : "Kaleen Bhaiyya",
// age : 45,
// gender : "male",
// city : "Mirzapur",
// hobbies : ["Making Guns"]
// };
// for(var key in data2)
// {
// console.log(key," --- ",data2[key]);
// }
// console.log(data2)




let array = [3, 4, 5, 6, 7, 3, 4, 5];
let object = {};

for (let i = 0; i < array.length; i++) {
  if (object[array[i]] == undefined) {
    object[array[i]] = 1;
  } else {
    object[array[i]]++;
  }
}
// console.log(object);

let sum = 0;
for (let key in object) {
  if (object[key] >= 2) {
    sum = sum + Number(key); 
  }
}
console.log(sum);



let str='nature';
let bag='';

let arr=['a','e','i','o','u'];
for(let i=0;i<=str.length;i++){
  for(let j=0;j<arr.length;j++){
  if(str[i]==arr[j]){
    bag=bag+arr[j];
  }
  }
}



// let arr=[];
// let obj={
//   a:1,
//   e:1,
//   i:1,
//   o:1,
//   u:1
// }
// arr.push(obj);

// console.log(arr);

