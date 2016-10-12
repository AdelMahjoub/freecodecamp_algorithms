//Missing letters
function fearNotLetter(str) {
  var missingLetters = "";
  for(var i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++){
    if(!str.includes(String.fromCharCode(i))) missingLetters += String.fromCharCode(i);
  }
  if(!missingLetters.length) return undefined;
  return missingLetters;
}
