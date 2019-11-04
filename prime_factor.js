function palindromeNums(){
  let a, b, prod, max = 0;
  for(a = 100; a<=999; a++){
    for(b = a; b<=999; b++){
      prod = a*b
      if(pal(prod)){
        if(max < prod){
        max = prod;
        }
      }
    }
  }
  return max
}

function pal(num){
  newNum = num + ""
  let rev = parseInt(newNum.split("").reverse().join(""))
  return rev === num ? true : false
}
