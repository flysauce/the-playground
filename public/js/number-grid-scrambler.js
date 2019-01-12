var grid = [	document.getElementById("r1c1"),
	document.getElementById("r1c2"),
	document.getElementById("r1c3"),
	document.getElementById("r2c1"),
	document.getElementById("r2c2"),
	document.getElementById("r2c3"),
	document.getElementById("r3c1"),
	document.getElementById("r3c2"),
	document.getElementById("r3c3")];

function scramble() {
	var numbers = [];
	var random;
	var i = 0;
	//create a random sequence of numbers 1-9
	while(numbers.length != 9) {
		//set random (1-9)
		random = Math.floor(Math.random() * 9) + 1;
		//if random is not in list, add to list
		if(!numbers.includes(random)) {
			numbers[i] = random;
			i++;
		}
	}
	//add numbers to grid
	for(i = 0; i < 9; i++) {
		grid[i].textContent = numbers[i];
	}
}

function reset() {
	var i;
	for(i = 0; i < 9; i++) {
		grid[i].textContent = i+1;
	}
}
