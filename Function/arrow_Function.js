function processArray(array,fn){
  for(let i =0;i<array.length;i++){
    console.log("index" , i, "value",array[i],"return value of fn",fn(array[i]));
  }
}
processArray([2,3,4,1,5],x =>x*x*x)