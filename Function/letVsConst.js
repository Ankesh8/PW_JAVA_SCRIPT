function constReassignment(){
  const x  = 10;
  console.log(x);
  x = "Ankesh";
  console.log(x);//because x is const, reassignment in not possible//throw an error

}

function constReassignmentWithObjects(){
  const obj = {x:10,y:20};
  console.log(obj);
  obj  = {a:6}; //reassignment to a brand new object throw an error
}

function constUpdation(){
  const o = {x:100,y:0};
  o.x = 90; //this do not throw an error
  o.z = 99;
}
constUpdation()



