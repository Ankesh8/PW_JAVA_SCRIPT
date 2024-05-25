
//rest operator
function manyArguments(){
  let args = Array.from(arguments)
  let finalArr = args.map(e => e);
  //console.log(finalArr)
}


function manyArguments(...args){
 let finalArr = args.map(e => e);
  console.log(finalArr)
}


manyArguments(1,2,3)
manyArguments(1,2,3,4,5,6,7)