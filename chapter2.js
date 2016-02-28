//Looping a Triangle
var hash = "";
for(var i = 0; i < 8; i ++){
	console.log(hash += "#");
}

//fizzBuzz

for(var i=1; i<101; i++){
	if(i % 15 === 0){
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}

//Chess board 

var size = 8;
var myBoard = "";
var counter = 1;
for(var i = 0; i < size; i++) {
	for(var j = 0; j < size; j++) {
		if((i+j) % 2 === 0){
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}








