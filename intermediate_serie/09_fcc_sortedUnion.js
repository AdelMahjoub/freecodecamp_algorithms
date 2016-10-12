function uniteUnique(arr) {
  var temp = arguments[0];
  for(var i = 1; i < arguments.length; i++){
    for(var j = 0; j < arguments[i].length; j++){
      if(!temp.includes(arguments[i][j])) temp.push(arguments[i][j]);
    }
  }
  return temp;
}
