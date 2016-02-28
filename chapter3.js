//Minimum
var min = function(a,b){
	if(a<b){
		return a;
	} else {
		return b;
	}
}

//recursive isEven

var isEven = function(num){
	if(num === 0){
		return true;
	} else if (num === 1){
		return false;
	} else if (num < 0){
		return isEven(-num)
	} else {
		return isEven(num-2)
	}
}

//beanCounting

var countBs = function(str){
	var counter = 0;
	for(var i=0; i<str.length; i++)
		if (str.charAt(i) === "B"){
			counter ++;
		}
	return counter;
}	

var countChar = function(str, letter){
	var counter = 0;
	for(var i=0; i<str.length; i++)
		if (str.charAt(i) === letter){
			counter ++;
		}
	return counter;
}
