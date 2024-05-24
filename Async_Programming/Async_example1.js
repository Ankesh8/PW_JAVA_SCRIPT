for(let i=0;i<100000000;i++){}
console.log("starting timer");
setTimeout(() => {
  console.log("work in timer")
},10000);
console.log("timer triggered");