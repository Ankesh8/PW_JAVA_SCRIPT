//if statement
let temp = 19
if(temp<20){
  console.log("It's very cold")
}
else{
  console.log("It's hot today")
}
 
// if_else statement
let score =110
let life =3
console.log("welcome to game")
if(score>99){
  console.log("you get a lifeline")
  score = score-100
  life++
}
else{
  console.log("you don't get a life line")
}
console.log(`your score is ${score} and life is ${life}`)
 // if else_if statement
let getstar = "5"
let starInNumber =parseInt(getstar)
if(starInNumber==1){
  console.log("poor");
}else if(starInNumber==2){
  console.log("emm ,ok");
}else if(starInNumber==3){
  console.log("average");
}
else if(starInNumber==4){
  console.log("great");
}else if(starInNumber==5){
  console.log("cool");
}else if(starInNumber==6){
  console.log("awesome")
}else{
  console.log("I don't rating");
}

//switch case statement

switch(starInNumber){
  case 1:
    console.log("poor");
    break;
  case 2:
    console.log("emm , okk");
    break;
  case 3:
    console.log("average");   
    break;
  case 4:
    console.log("good");
    break;
  case 5:
    console.log("good");
    break;
  case 6:
    console.log("cool");
    break;
  case 7:
    console.log("Ohh nice");
    break;
  default:
    console.log("not rating");         
}