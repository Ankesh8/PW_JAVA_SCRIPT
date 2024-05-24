function createPromise(){
  return new Promise(function exec(resolved,reject){
    setTimeout(function f(){
      console.log("Timer done");
      resolved(10);
    },3000);
  });
}
async function consume(){
  console.log("inside the function");
  const response = await createPromise();
  console.log("response is",response);
}
console.log("start");
consume()
console.log("end");