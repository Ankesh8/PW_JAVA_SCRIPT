const obj ={
  func1: function f(x){
    console.log("F called")
    return{
      func2: function g(){
        console.log("g called")
      }
    };
  }
}
obj.func1(10).func2();