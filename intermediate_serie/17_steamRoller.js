
function steamrollArray(arr) {
  var arg = arr.map(function(val){return val;});//to keep the passed arr unchanged
  var temp = [];
  do{
    if(!Array.isArray(arg[0])){
      temp.push(arg.shift());  
    }else{
      for(var i = 0; i < arg[0].length; i++){
        arg.push(arg[0][i]);
      }
      arg.shift();
    }
  }while(Boolean(arg[0]));
  return temp;
}
