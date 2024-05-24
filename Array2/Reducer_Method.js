const shoppingcart = [
  {product: 'shoes',price:80,quantity:1},
  {product: 'Bag',price:120,quantity:2},
  {product: 'Watch',price:250,quantity:4}
  
];
const result = shoppingcart.reduce(function reducer(accumulator,currentvalue){
  return accumulator + currentvalue.price *currentvalue.quantity;
},0);
console.log(result);
