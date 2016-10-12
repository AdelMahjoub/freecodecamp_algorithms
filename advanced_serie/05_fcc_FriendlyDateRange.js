function makeFriendlyDates(arr) {
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var date1 = new Date(arr[0]), date2 = new Date(arr[1]);
  var result = [];
  var day = function(d){
    if( d == 1) return d+"st";
    if( d == 2) return d+"nd";
    if( d == 3) return d+"rd";
    if( d > 3) return d+"th";
  };
  //same date
  if(date1.getTime() == date2.getTime()){
    //console.log("same date");
    result.push(months[date1.getMonth()] + " " + day(date1.getDate()) + ", " + date1.getFullYear());
    return result;
  }
  
  //range more or equal one year 
  if((date2.getTime() - date1.getTime()) >= 31471200000){
    //console.log("range more or equal to one year");
    result.push(months[date1.getMonth()] + " " + day(date1.getDate()) + ", " + date1.getFullYear());
    result.push(months[date2.getMonth()] + " " + day(date2.getDate()) + ", " + date2.getFullYear());
    return result;
  }
  
  //range less than one year
  if((date2.getTime() - date1.getTime()) < 31471200000){  
    
    //console.log("range less than one year");
    
    //same year same month
    if(date2.getFullYear() == date1.getFullYear() && date2.getMonth() == date1.getMonth() ){
      //console.log("same year same month");
      result.push(months[date1.getMonth()] + " " + day(date1.getDate()));
      result.push(day(date2.getDate()));
      return result;
    }
    //same year different months
    if(date2.getFullYear() == date1.getFullYear() && date2.getMonth() != date1.getMonth()){
      //console.log("same year different months");
      result.push(months[date1.getMonth()] + " " + day(date1.getDate()) + ", " + date1.getFullYear());
      result.push(months[date2.getMonth()] + " " + day(date2.getDate()));
      return result;
    }
    
    //one month or less to next year
    var nextYear = new Date(date2.getFullYear().toString()).getTime();
    if(nextYear - date1.getTime() <= 2678400000){
      //console.log("less than one month to next year");
      result.push(months[date1.getMonth()] + " " + day(date1.getDate()));
      result.push(months[date2.getMonth()] + " " + day(date2.getDate()));
      return result;
    }
    //default less than one year
    result.push(months[date1.getMonth()] + " " + day(date1.getDate()) + ", " + date1.getFullYear());
    result.push(months[date2.getMonth()] + " " + day(date2.getDate()));
    return result;
  }
}
