function convertHTML(str) {
  var htmlEntities = [
  [/&/g, "&amp;"],
  [/</g, "&lt;"], 
  [/>/g, "&gt;"],
  [/"/g, "&quot;"],
  [/'/g, "&apos;"]
];
if(/[&<>"']/.test(str)){
  for(var i = 0; i < htmlEntities.length; i++){
   str = str.replace(htmlEntities[i][0], htmlEntities[i][1]);
  }
}
return str;
}
