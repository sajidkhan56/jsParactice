var week_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var today = week_days[date.getDay()];
var time = date.toLocaleString('en-US', { hour: 'numeric', hour12: true }) + ":" + date.getMinutes() + ":" + date.getSeconds();
document.write("Today is: "+today+"</br>");
document.write("Current Time is: "+time);