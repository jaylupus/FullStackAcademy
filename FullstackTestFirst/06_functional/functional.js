// 06_Functional 
function doubler(x){
	return x * 2;
}

function map(arr, func){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(func(arr[i]));
	}
	return newArr;
}

function filter(arr, func){
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function contains(coll, x){
	for (var i in coll) {
		if (coll[i] == x){
			return true;
		}
	}
	return false;
}

function countWords(str){
	return str.split(" ").length;
}

function countWordsInReduce(num, str){
	return num + countWords(str);
}

function reduce(arr, start, func){
	var holder = func(0, arr[start]);
	for (var i = start + 1; i < arr.length; i++){
		holder = func(holder, arr[i]);
	}
	return holder;
}

function sum(arr){
	return reduce(arr, 0, function(a,b){return(a+b)})
}

function every(arr, func){
	if (arr.length === 0){
		return true;
	}
	else{
		return (filter(arr, func).length == arr.length);
	}
}

function any(arr, func){
	if (arr.length === 0){
		return false;
	}
	else{
		return (filter(arr,func).length > 0);
	}
}