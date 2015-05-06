var x = 5;
var y = 7;

var difference = function(x, y) {
	result = x - y;
	if (x - y < 0) {
		result = y - x;
	}
};

difference(5, 7);
console.log("The answer is", + result);