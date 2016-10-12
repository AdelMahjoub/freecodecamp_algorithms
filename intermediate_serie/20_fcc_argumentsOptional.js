function addTogether(){
  var temp = arguments;
  for(var i = 0; i < temp.length; i++){
    if(typeof temp[i] !== "number") return undefined;
  }
 if(temp.length == 1){
    return function(val){
      if(typeof val == "number") return temp[0] + val;
      else return undefined;
    };
  }
  var sum = 0;
  if(temp.length>=2){
    for(var j =0 ; j < temp.length; j++){
      sum += temp[j];
    }
    return sum;
  }
  
  return undefined;
}
