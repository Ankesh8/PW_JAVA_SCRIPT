function addNumber(){
  // no parameter passed in the function
  console.log(arguments)
  console.log(arguments.length)
  let result = 0;
  for(let i=0;i<arguments.length;i++){
    // i denotes  index of array 0 -based
    result += arguments[i];
  }
  return result;
}
// variable arguments
console.log(addNumber(9,1,2));
console.log(addNumber(7,1,2,0,1));
console.log(addNumber(5));