var string = "Sajid khan";
var rotate_string = "";
var count = string.length;
for(var i = count-1; i >= 0; i--) {
    rotate_string = rotate_string + string[i];
}
console.log(string);
console.log(rotate_string);
