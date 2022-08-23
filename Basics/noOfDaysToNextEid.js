var current_data = new Date();
var eid_date = new Date('4/21/2023');
var diffrence = eid_date.getTime() - current_data.getTime();
var total_days_left = diffrence / (1000 * 3600 * 24);
alert(total_days_left);