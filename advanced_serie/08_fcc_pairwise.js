function pairwise(arr, arg) {
  var indexArr = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
      if( arr[i]+arr[j] == arg && !indexArr.includes(i) && !indexArr.includes(j)){
        indexArr.push(i);
        indexArr.push(j);
      }
    }
  }
  return indexArr.reduce(function(pre,curr){return pre + curr;},0);
}
