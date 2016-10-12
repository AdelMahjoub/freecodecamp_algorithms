//DNA Pairing
function pairElement(str) {
  return str.split("").map(function(val){
    if(val === "C") return (val+"G").split("");
    if(val === "G") return (val+"C").split("");
    if(val === "A") return (val+"T").split("");
    else return (val+"A").split("");
  });
}
