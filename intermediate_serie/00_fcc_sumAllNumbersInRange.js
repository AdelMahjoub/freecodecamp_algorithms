
function sumAll(arr){
  var interval =[];
  for(var i = Math.min.apply(null,arr); i<= Math.max.apply(null,arr);i++){
    interval.push(i);
  }
  return interval.reduce(function(a,b){return a+b;});
}
