const user = {
  username: "An",
  name: "Ankesh",
  email :"an@gmail.com",
  age : 20,
  isAdmin : false,
  isLogin: true,
  tea: ["lemon","peach","icetea","milktea"],
  address :{
    city:"begusarai",
    state : "bihar"
  }
}
user.email = "ankesh@wipro.com"
console.log(user.age)
console.log(user['age'])
console.log(user.tea[1])
console.log(user.address.city)
console.log(user['address']['city'])
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))