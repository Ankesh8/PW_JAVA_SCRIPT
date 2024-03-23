//for loop

/*
for([initialExpression/declaration]; [conditin]; [changer]){
   //body
}
*/
let userscore=1
for(userscore;userscore<=10;userscore++){
  console.log(`user score is ${userscore}`);
}
//break keyword
//if we hit's 5  don't print anything after that
let uscore =10
for(uscore;uscore>=0;uscore--){
  if(uscore==5)
  break;
console.log(`userscore is ${uscore}`)
}

//continue
//if user hit five skip 5 and rest of the no. will be print
let usscore =10
const username ="Ankesh"
for(uscore;usscore>=0;usscore--){
  if(usscore==5)
  continue;
console.log(`userscore is ${usscore}`)
console.log(`username is ${username}`)
}