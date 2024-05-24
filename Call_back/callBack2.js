function h(x,fn){
  console.log(x*x);
  fn(x)
}
h(10,exec)
function exec(n){
  console.log("Square of number is",n*n)
}