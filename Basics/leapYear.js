var leap_year = 2024;

if ( leap_year % 4 == 0) {
    if ( leap_year % 100 == 0) {
        if (leap_year % 400 == 0) {
            document.write("The year leap year");
        } else {
            document.write("The year is not a leap year");
        }
    } else {
        document.write("The year leap year");
    }
} else {
    document.write("The year is not a leap year");
}
