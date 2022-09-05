// Only change code below this line
class Thermostat {
	constructor (Fahrenheit){
		this._Celsius =  5/9 * (Fahrenheit - 32);
	}

  	// getter
	get temperature() {
	return this._Celsius;
	}
	// setter
	set temperature(updatedTemp) {
	this._Celsius = updatedTemp;
	}

}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);