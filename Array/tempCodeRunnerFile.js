function customForEach(arr,cb){
  for(let i =0;i<arr.lenght;i++){
    cb(arr[i],i);
  }
}
customForEach([1,2,3],(element,idx)=>{
  console.log("Element at index ",idx,"is",element);
});