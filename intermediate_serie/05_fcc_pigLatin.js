//Pig Latin
function translatePigLatin(str) {
  if(/^[aeiouy]/.test(str)) return str+"way";
  if(!/^[aeiouy]/.test(str) && !/^[aeiouy]/.test(str.substr(1))) return str.substr(2) + str.substr(0,2) + "ay";
  return str.substr(1) + str.substr(0,1) + "ay";
}
