//Spinal Tap Case
function spinalCase(str) {
  var temp = str.replace(/[_\s]/g,"-").split("");
  temp[0] = temp[0].toLowerCase();
  for(var i = 1; i < temp.length; i++){
    if(/[A-Z]/.test(temp[i]) && !/[-]/.test(temp[i-1])){
      temp[i] = "-"+temp[i].toLowerCase();
    }
    else if(/[A-Z]/.test(temp[i]) && /[-]/.test(temp[i-1])){
      temp[i] = temp[i].toLowerCase(); 
    }
  }
  str = temp.join("");
  return str;
}
