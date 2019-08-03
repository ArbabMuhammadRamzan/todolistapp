exports.getDate = function (){
  var myDate = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  return myDate.toLocaleDateString("en-US", options);

}
