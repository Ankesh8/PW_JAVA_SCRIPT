function fact(n){
  if(n==0)
  return 1;
 const result = n * fact(n-1);
 return result
}
console.log(fact(5))