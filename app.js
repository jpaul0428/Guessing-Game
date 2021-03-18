let maximum = parseInt(prompt('Enter the maximum number!'));
// set boundaries for integer
while (!maximum) {
	maximum = parseInt(prompt('Enter a valid number!'));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
// define guess and set parseInt boundary
let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
	if (guess === 'q') break;
	attempts++;
	if (guess > targetNum) {
		guess = prompt('Too high!  Enter a new guess:');
	} else {
		guess = prompt('Too low! enter a new guess:');
	}
}
// allow quit option, console.log final statement after guessing correctly
if (guess === 'q') {
	console.log('Okay, game stopped!');
} else {
	console.log('Good job! You did it!');
	console.log(`It took you ${attempts} guesses!`);
}
