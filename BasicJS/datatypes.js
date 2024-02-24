//primitive
/*
String
Number
Boolean
Null
undefined
Symbol
BigInt
*/
const name = "ankesh"  //string
const age  = 22 //Number
let isLoggedIn = false //boolean
let nodeVersion = null
let bankBalance  = undefined
const buttonId =Symbol("ID")
const reallyLongNumber = 90000023452020502
 

//Reference (Non-Primitive) - Objects
/*
Array
Object
Function
*/

const num = [1,2,5,6,7]  //array

const course ={  // objects
  name: "Ankesh",
  college: "Galgotias University",
  Course: "Mca",
  Id: 286,
  isLogg: true
  
}

console.log(course.name)
console.log(course.isLogg)

//function

function fun(){
  console.log("Hello Ankesh !")
}
fun()
