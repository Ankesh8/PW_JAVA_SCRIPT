function createPromise(){
  return new Promise(function exec(resolved,reject){
    setTimeout(function f(){
      console.log("Timer done");
      resolved(10);
    },3000);
  });
}
console.log("Start");
let x = createPromise();
console.log("got a new promise");
x.then(function f(value){
  console.log("promise done",value);
})
console.log("end");
for(let i=0;i<1000000000;i++){
  
}