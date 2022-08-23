var number = window.prompt("Enter your number(1 to 10)");
var random_number = Math.floor(Math.random() * 10);

if (number == random_number) {
    document.write("Good Work the guess is correct");
} else {
    document.write("Incorrect Guess");
}
