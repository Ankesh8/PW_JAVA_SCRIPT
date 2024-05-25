let myarray = [1,2,3,4]
let newarray = new Set([...myarray])
console.log(newarray)
newarray.add(5)
console.log(newarray)
console.log(newarray.has(5))