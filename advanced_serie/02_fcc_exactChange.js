function checkCashRegister(price, cash, cid) {
 //unitary value of bill and coins
  var unitaire= [
                   {name:"PENNY", val:0.01},
                   {name:"NICKEL", val:0.05},
                   {name:"DIME", val: 0.1},
                   {name:"QUARTER", val:0.25},
                   {name:"ONE", val:1},
                   {name:"FIVE", val:5},
                   {name:"TEN", val:10},
                   {name:"TWENTY", val:20},
                   {name:"ONE HUNDRED", val:100}
                  ];
  //bill and coins to return
  var dueArr = [["PENNY", 0],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0.0],
                ["ONE", 0],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]];
  
  var currentCid = cid.reduce(function(pre,curr,i,cid){return pre + cid[i][1];},0); // sum of the given cash-in-drawer 2nd arg
  var due = cash - price;
  if(due == currentCid) return "Closed"; //close condition
  if(currentCid < due) return "Insufficient Funds"; // Insufficient funds condition
  
  //the change
  var i = cid.length - 1;
  while(i >= 0){
    console.log(due);
    if(due >= unitaire[i].val){
      if(cid[i][1] >= unitaire[i].val){
        dueArr[i][1] += unitaire[i].val;
        cid[i][1] -= unitaire[i].val;
        due -= unitaire[i].val;
        if(due < 0.01 && due >= 0.0099) due = 0.01; //round due when it is too close to a penny 
      }
      else i--;
    }else i--;
  }
  if(due === 0) return dueArr.filter(function(e,i){return dueArr[i][1];}).reverse();
  return "Insufficient Funds";
}
