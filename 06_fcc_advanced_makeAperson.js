var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  
  this.getFirstName = function(){
    return fullName.split(" ")[0];
  };
  this.getLastName = function(){
    return fullName.split(" ")[1];
  };
  this.getFullName = function(){
    return fullName;
  };
  this.setFirstName = function(first){
    fullName = fullName.split(" ").splice(1);
    fullName.unshift(first);
    fullName = fullName.join(' ');
  };
  this.setLastName = function(last){
    fullName = fullName.split(" ").splice(0,1);
    fullName.push(last);
    fullName = fullName.join(' ');
  };
  this.setFullName = function(firstAndLast){
    fullName = firstAndLast;
  };
};
