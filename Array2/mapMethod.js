const arr = [2,3,4,5,6,7]
const result = arr.map((element)=>{
  console.log("Element is ",element)
  return element*element;
})
console.log(result)