
function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var i;
  for(i = max;;i+=max){
    var count = 0;
    for(var j = min; j <= max ; j++){
      if(i%j === 0) count++;
    }
    if(count == ((max - min)+1)) break;
  }
  return i;
}
