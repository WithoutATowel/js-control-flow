
function pluralizer() {
	var thing = prompt("What is it?");
	while (thing === "") {
		var thing = prompt("You didn't enter a value. What is it?");
	}
	var num = parseInt(prompt("How many are there? Enter a number equal to or larger than 0."));
	while (isNaN(num) || num < 0) {
		var num = parseInt(prompt("Invalid input. How many are there?"));
	}
	if (num == 1) {
		console.log("There is 1 " + thing);
	} else {
		console.log("There are " + num + " " + thing + "s");
	}
}

pluralizer();