//greatest common demoninator
//takes in 2 numbers, if b is 0, return a
//otherwise recursively call the function with b and the remainder of a/b
}
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a%b); // Euclidean algorithm
}

//lowest common multiple
//takes in 2 numbers
// return the product of a * b divided by the greatest common demoninator
function lcm(a, b) {
  return a * b / gcd(a, b);
}

//takes in a top number in the range
//sets a result variable
//loop through 1-a
//set result as the return value of the lcm function taking in the current result value and the current number you're iterating through 
function divisible(a){
  var result = 1;
  for(var i=2; i<=a; ++i)
    result = lcm(result, i);
  return result;
}
