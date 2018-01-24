function fToC () {
	var tempF = parseInt(prompt("What's the temperature in Fahrenheit?"));
	while(isNaN(tempF)) {
		var tempF = parseInt(prompt("That wasn't a number. What's the temperature in Fahrenheit?"));
	}
	var tempC = (((tempF - 32) * 5) / 9).toFixed(1);
	console.log(tempF + " degrees Fahrenheit is " + tempC + " degrees Celsius");
}

fToC();