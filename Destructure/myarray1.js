const onearray = [1,2,3,4];
const twoarray = [5,6,7,8];
//const threearray  =onearray.concat(twoarray);
const threearray = [...onearray,...twoarray] // spread operator
//console.log(threearray);

function textone(){
  console.log( typeof arguments)
}
textone(1,2,3,4)