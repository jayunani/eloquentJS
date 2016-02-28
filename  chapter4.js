//the Sum of a Range

var range = function(a,b) {
	var newArray = [];
	for(var i = a; i < b + 1; i++) {
		newArray.push(i);
	}
	return newArray;
}

var sum = function(array) {
	var finalSum = 0;
	for(var i = 0; i < array.length; i++) {
		finalSum += i;
	}
	return finalSum;
}

var newRange = function(a, b, c) {
	var newArray = [];
	if (b > a) {
	for(var i = a; i <= b; i += c) {
		newArray.push(i);
		}
	} else if (a > b){
		for(var i = a; i >= b; i += c) {
		newArray.push(i);
		}
	}
	return newArray;
}

//Reversing an Array

var reverseArray = function(array){
	var newArray = [];
	for(var i = array.length-1; i >= 0; i--){
		newArray.push(array[i])
	}
	return newArray;
}

var reverseArrayInPlace = function(array){
	var a;
	for(var i = 0; i < Math.floor(array.length/2); i++){
		a = array[i];
		array[i] = array[array.length-1-i];
		array[array.length-1-i] = a;
	}
	return array;
}

//A List
var list = {
  value: 1, 
  rest: { 
  	value: 2, 
  	rest: { 
  		value: 3, 
  		rest: null
    }
  }
};

var arrayToList = function(array) {
	var list = null;
	for (var i = array.length-1; i >= 0; i--){
		list = {value:array[i], rest: list};
	}
	return list;
}

var listToArray = function(list) {
	var newArray = [];
	for (var node = list; node; node = node.rest) {
		newArray.push(node.value)
	}
	return newArray;
}

var prepend = function(value, list){
	return {value: value, rest: list};
}

var nth = function(list, num){ 
	if(!list) {
		return undefined;
	else if(num === 0){
		return list.value;
	} else {
		return nth(list.rest, num-1);
		}
	}
}

}