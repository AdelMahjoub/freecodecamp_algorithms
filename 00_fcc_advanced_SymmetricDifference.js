//SymmetricDifference
function sym(args) {
  var temp = [];
  temp = arguments;
  symDiff = temp[0].filter(function(e){return !temp[1].includes(e);}).concat(temp[1].filter(function(e){return !temp[0].includes(e);}));
  if(temp.length >2){
    for(var i = 2; i < temp.length; i++){
      symDiff = symDiff.filter(function(e){return !temp[i].includes(e);}).concat(temp[i].filter(function(e){return !symDiff.includes(e);}));
    }
    for( var j = 0; j < symDiff.length; j++ ){
      var count = 0;
      for( var k = 0; k < symDiff.length; k++){
        if(symDiff[j] == symDiff[k]) count++;
      }
      if(count > 1){
        symDiff.splice(j,1);
        j--;
      } 
    }
  }
  return symDiff;
}
