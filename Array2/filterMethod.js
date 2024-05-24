const product =[{id :1,name:'iphone',price:1000},{id :2,name:'Macbook',price:2000},{id :3,name:'Airpods',price:3000},{id :4,name:'Apple_watch',price:5000}]

const modificationProduct = product.filter((product,idx)=>{
  console.log(idx)
  return product.price <=1000;
})
console.log(modificationProduct)