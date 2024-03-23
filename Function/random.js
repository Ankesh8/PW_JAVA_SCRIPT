console.log(Math.random(4,7))
//you will be given two values, x and y ,and need tp generate a random number 
//between x and y inclusive of x and y
function randomInRange(x,y){
  return Math.floor(Math.random() *(y-x+1)+x);
}
console.log(randomInRange(10,35))