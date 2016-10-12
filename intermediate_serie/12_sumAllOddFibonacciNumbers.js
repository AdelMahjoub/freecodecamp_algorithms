//Sum All Odd Fibonacci Numbers
function setFibonacci(num){
  var arr = [1,1];
  var i = 1;
  do{
    i++;
    arr[i] = arr[i-1] + arr[i-2];
  }while((arr[i]+arr[i-1])<=num);
  return arr;
}
function sumFibs(num) {
  return setFibonacci(num).filter(function(e){return e%2;}).reduce(function(total,val){return total+val;});
}
