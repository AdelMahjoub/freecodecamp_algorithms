//Search and Replace
function myReplace(str, before, after) {
  if(str.includes(before.slice(0,1).toUpperCase() + before.slice(1)))
    return str.replace(before,(after.slice(0,1).toUpperCase() + after.slice(1)));
  return str.replace(before,after);
}
