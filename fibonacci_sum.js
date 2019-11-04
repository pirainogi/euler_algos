let fib = function() {
  let a = 0, b = 1, temp, sum = 0
  while(a <= 4000000){
    temp = a;
    a = a + b;
    b = temp; 
    if(b % 2 === 0){
      sum += b
    }
  }
  return sum
}
