//Sum All Primes
function findPrimes(num){
  var primes = [];
  for(var i = 2; i <= num; i++){
    var count = 0;
    for(var j = 1; j <= i ; j++){
      if(!(i%j)) count++;
    }
    if(count <= 2) primes.push(i);
  }
  return primes;
}
function sumPrimes(num) {
  return findPrimes(num).reduce(function(total,val){return total + val;});
}
