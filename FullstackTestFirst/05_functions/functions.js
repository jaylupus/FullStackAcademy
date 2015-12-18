// Functions.js
function concat_string(){
	var toReturn = "";
	for (var i = 0; i < arguments.length; i++) {
		toReturn += arguments[i];
	};
	return toReturn;
}

function yourFunctionRunner(){
	var toReturn = "";
	for (var i = 0; i < arguments.length; i++) {
		toReturn += arguments[i]();
	};
	return toReturn;
}

function makeAdder(A){
	return function(x){return x + A};
}

function once(func){
	var newFunc = function(){
		if (! newFunc.used){
			newFunc.used = true;
			func();
		}
	}
	newFunc.used = false;
	return newFunc;
}

function createObjectWithTwoClosures(){
	var val = 0;
	var newObj = {};
	newObj.oneIncrementer = function(){val++};
	newObj.tensIncrementer = function(){val += 10};
	newObj.getValue = function(){return val};
	return newObj;
}