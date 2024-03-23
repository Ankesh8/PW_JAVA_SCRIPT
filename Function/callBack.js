function processArray(array,fn){
  for(let i=0;i<array.length;i++){
    console.log("index of ",i,"value of ",array[i],"return value of fn",fn(array[i]));
  }
}
//processArray([1,2,3,4],function cube(x){return x*x*x});
processArray([1,2,3,4],function square(x){return x*x});