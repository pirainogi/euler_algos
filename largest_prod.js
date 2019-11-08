function largestProd(num){
  arr = num.split("").map(Number)
  const reducer = (acc, curr) => {return acc * curr}
  let product = 0

  for(let i = 0; i<arr.length; i++){
    let thirteen = arr.slice(i, i+13)
    let temp = thirteen.reduce(reducer)
    if(temp > product){
      product = temp
    }
  }
  
  return product
}
