function blockofcode(){
  for(let i=0; i<10000000000;i++){
    //block of code
  }
}
let x =10;
setTimeout(() => {
  console.log("Timer 1 done");
}, 5000);
blockofcode();
setTimeout(() => {
  console.log("Timer 2 done")
}, 3000);
setTimeout(() => {
  blockofcode();
  x++;
  console.log("Timer 3 done")
  
},100);
blockofcode();
console.log(x);