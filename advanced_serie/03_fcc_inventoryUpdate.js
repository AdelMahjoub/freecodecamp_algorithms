//inventoryUpdate
function updateInventory(arr1, arr2) {
  //updating quantities
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j< arr2.length; j++){
      if(arr1[i][1] == arr2[j][1]) arr1[i][0] += arr2[j][0];//adding new quantities to previous stock
    }
  }
  //updating items
  for( var i = 0; i < arr2.length; i++){
    var count = 0;
    for( var j =0; j < arr1.length; j++){
      if(arr2[i][1] == arr1[j][1]) count++;
    }
    if(count === 0) arr1.push(arr2[i]); //adding new items at the end of the stock
  }
  return arr1.sort(function(a,b){return a[1] > b[1];});//return the inventory sorted in alphabetical order by item
}
