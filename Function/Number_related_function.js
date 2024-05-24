console.log(Number.MAX_VALUE); // +infinite
console.log(Number.MIN_VALUE); // -infinite


//convert a decimal to binary
const x =13;
console.log(x.toString(2)) // converts the number to a binary
console.log(x.toString(8)) // converts the number to octal
 
//if you call tostring without an argument, then it just converts the number to string
console.log(x.toString());
 
//to convert a binary to decimal
console.log(parseInt("1101",2));