function diffArray(arr1, arr2) {
  return arr1.filter(function(a){return !arr2.includes(a);}).concat(arr2.filter(function(a){return !arr1.includes(a);}));
}
