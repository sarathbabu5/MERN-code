let obj={
 a:[],
  res:function (){
    let array= ["goku", "gohan", "luffy","naruto"];
     let arr=[];
    for(let i=0;i<array.length;i++){
    let bag='';
    for(let j=array[i].length-1;j>=0;j--){
     
      bag=bag+array[i][j];
    };
      arr.push(bag);
    };
      return arr;
  }
}

console.log(obj.res());


let details={
  data:[],
  addStudent: function(name,english,maths,physic){
    let object={};
    object.name= name;
    object.english= english;
    object.maths= maths;
    object.physic= physic;

    this.data.push(object);
  },
  leastTotal: function(){
    let lowerScore= +Infinity
    let lowStudent; //empty

    for(let i=0;i<this.data.length;i++){
      let total= this.data[i].english + 
      this.data[i].maths + this.data[i].physic;

       if(lowerScore > total){
         lowerScore = total;
         lowStudent= this.data[i].name;
        
     }
     }
    console.log("lowStudent",lowStudent);
  },

  higestTotal: function(){
    let higestScore= -Infinity
    let highStudent;
    
    for(let i=0;i<this.data.length;i++){
      
      let total=this.data[i].english +         
       this.data[i].maths + this.data[i].physic;
      if(higestScore < total){
        higestScore=total;
        highStudent=this.data[i].name;
      
       
      }
    }
    console.log("highStudent",highStudent);
  }

}

details.addStudent("mahesh",23,12,34);
details.addStudent("goku",33,22,44);
details.addStudent("gohan",95,52,94);

 console.log(details.data);
details.leastTotal();
details.higestTotal();