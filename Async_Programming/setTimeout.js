console.log("start")
function greet(){
  console.log("timer done")
}
setTimeout(greet,3000)
console.log("end")

setTimeout(function f(){
  console.log("timer started")
},3000)
