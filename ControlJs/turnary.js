let age =19
let willudl = false
if(age>=18){
  console.log("you get the driving license");
  willudl = true
}else{
  console.log("you are not eligible for driving license")
  willudl  = false
}

//turnary operator
 (age>=18) ? willudl=true:willudl=false;

 let loading = true
 if(loading){
  return "loading..."
 }
 console.log("show your card")

 loading ? "show loading spinner" :"show your card"