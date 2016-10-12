function permAlone(str) {
  var repeat = /(.)\1+/g;
  if(str.match(repeat) !== null  && str.match(repeat)[0] == str) return 0;
  var arr = str.split('');
  var permutArr = [];
  var temp, position = 0, len = str.length - 1;
  function permutation(position, len){
    if(position == len){
      permutArr.push(arr.map(function(val){return val;}).join(''));
      //console.log(arr.map(function(val){return val;}).join(''));
    }else{
      for(var i = position; i<= len; i++){
        temp = arr[i];
        arr[i] = arr[position];
        arr[position] = temp;
        permutation(position+1,len);
        temp = arr[i];
        arr[i] = arr[position];
        arr[position] = temp;
      }
    }
  }
  permutation(position,len);
  var result = permutArr.filter(function(x){return !x.match(repeat);});
  return result.length;
}
