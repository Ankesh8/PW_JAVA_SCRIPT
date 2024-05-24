let arr = [1,2,3,4,5]
arr.forEach((element)=>{
  console.log("element is", element);
})

console.log("*******")
function customForEach(arr, cb) {
  for(let i = 0; i<arr.length; i++) {
      // now we have access to every index and element of the array
      cb(arr[i], i);
  }
}

customForEach([1,2,3], (element, idx) => {
  console.log("Element at index ", idx, "is", element);
}); // example of how you will call your function