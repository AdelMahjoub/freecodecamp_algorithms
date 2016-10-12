//Wherefore art thou
function whatIsInAName(collection, source) {
  var keys = Object.keys(source);
  var arr = [];
  for(var i = 0; i < collection.length; i++){
    var match = 0;
    for(var j = 0; j < keys.length; j++){
      if(collection[i].hasOwnProperty(keys[j]) && collection[i][keys[j]] == source[keys[j]])  match++;
    }
    if(match >= keys.length) arr.push(collection[i]);
  }
  return arr;
}
