function truthCheck(collection, pre) {
  return Boolean(collection.map(function(val){
    return(val.hasOwnProperty(pre) && Boolean(val[pre]));
  }).reduce(function(total,val){
    return total*val;
  })); 
}
