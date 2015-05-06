var bottlesOfBeer = 99;

function singAboutBeer() {
	return(bottlesOfBeer + " bottles of beer on the wall, " 
							  + bottlesOfBeer + " bottles of beer, take one down, pass it around, " 
							  + (bottlesOfBeer - 1) + " bottles of beer on the wall!");
}

for (i = bottlesOfBeer; bottlesOfBeer > 1; bottlesOfBeer--) {
	console.log(singAboutBeer(bottlesOfBeer));
}

console.log('1 bottle of beer on the wall, one bottle of beer, take one down, pass it around, no more bottles of beer on the wall!');
