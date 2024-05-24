function factorial(){
  return [1,2,3,4,5].reduce(function reducer(acc,val){
    return acc *val;
  },1)
}
console.log(factorial());