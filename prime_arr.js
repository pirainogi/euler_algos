function isPrime(num){
  if(num === 0 || num === 1){
    return false
  } else if(num === 3){
    return true
  } else {
    for(let i = 2; i<num; i++){
      if(num%i === 0){
        return false
      }
    }
  }
  return true
}

function findPrime(num){
  let arr = []
  let count = 1
  for(let i=1; count<=num; i++){
    if(isPrime(i)){
      arr.push(i)
      count++
    }
  }
  return arr[arr.length - 1]
}
