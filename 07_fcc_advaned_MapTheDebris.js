//Map the Debris
function orbitalPeriod(arr) {
  var temp = arr;
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for(var i = 0; i < temp.length; i ++){
    var p = Math.round(2*Math.PI*Math.sqrt(Math.pow((temp[i].avgAlt+earthRadius),3)/GM));
    temp[i].orbitalPeriod = p;
    delete(temp[i].avgAlt);
  }
  return temp;
}
