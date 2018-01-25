function fToC () {
	var tempF = parseInt(prompt("What's the temperature in Fahrenheit?"));
	while(isNaN(tempF)) {
		var tempF = parseInt(prompt("That wasn't a number. What's the temperature in Fahrenheit?"));
	}
	var tempC = (((tempF - 32) * 5) / 9).toFixed(1);
	console.log(tempF + " degrees Fahrenheit is " + tempC + " degrees Celsius");
}

fToC();

function cToF () {
	var tempC = parseInt(prompt("What's the temperature in Celsius?"));
	while(isNaN(tempC)) {
		var tempC = parseInt(prompt("That wasn't a number. What's the temperature in Celsius?"));
	}
	var tempF = (((tempC * 9) / 5) + 32).toFixed(1);
	console.log(tempC + " degrees Celsius is " + tempF + " degrees Celsius");
}

cToF();