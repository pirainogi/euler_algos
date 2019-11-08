function sumSqs(num){
  let result = 0
  for(let i = 1; i<= num; i++){
    result += i*i
  }
  return result
}

function sqSum(num){
  let sum =0
  for(let i = 1; i<=num; i++){
    sum+= i
  }
  return sum*sum
}

function difSumSq(num){
  return sqSum(num) - sumSqs(num)
}

// difSumSq(100)
