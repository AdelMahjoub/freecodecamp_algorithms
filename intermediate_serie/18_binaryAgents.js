
//Binary Agents
function binaryAgent(str) {
  return str.split(" ").map(function(val){
    return String.fromCharCode(parseInt(val,2));
  }).join("");
}
