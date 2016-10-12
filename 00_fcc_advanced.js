//Validate US Telephone Numbers

function telephoneCheck(str) {
  var usNumber = str.replace(/[\s-]/g,"");
  if(str[0] == "-") return false;
  if(usNumber.length >13) return false;
  if(usNumber.length < 10) return false;
  if( /\W/g.test(usNumber.substr(-7)) ) return false;
  if((usNumber.length - 7) == 4){
    if ( /\W/g.test(usNumber) ) return false;
    if(usNumber[0] != "1") return false;
  }
  if((usNumber.length - 7) == 6){
    if(usNumber[0] != "1") return false;
    if( /\W/g.test(usNumber.substr(2,3)) ) return false;
    if(usNumber[1] != "(") return false;
    if(usNumber[5] != ")") return false;
  }
  if((usNumber.length - 7) == 5){
    if(usNumber[0] != "(") return false;
    if(usNumber[4] != ")") return false;
    if( /\W/g.test(usNumber.substr(1,3)) ) return false;
  }
  if((usNumber.length - 7) == 3){
    if( /\W/g.test(usNumber.substr(0,3)) ) return false;
  }
  return true;
}
