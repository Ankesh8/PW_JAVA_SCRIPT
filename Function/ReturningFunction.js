function fun(){
  console.log("called the function fun");
  return function CleanUp(){
    console.log("Cleaning up the Resource")
  }
}
const result = fun();
result();