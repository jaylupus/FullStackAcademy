function factorialIterative(n){
	var toReturn = 1;
	while (n > 1){
		toReturn *= n;
		n--;
	}
	return toReturn;
}

function factorial(n){
	if (n == 0){
		return 1;
	}
	else{
		return n * factorial(n-1);
	}
}

function fib(n){
	if ((n == 0) || (n == 1)){
		return 1;
	}
	else{
		return fib(n-1) + fib(n-2);
	}
}

function type(input){
	return Object.prototype.toString.call(input).slice(8, -1);
}

function stringify(input){
	switch(type(input)){
		case 'Null':
			return 'null';
			break;
		case 'Undefined':
			return 'undefined';
			break;
		case 'String':
			return '\"' + input + '\"';
			break;
		case 'Boolean':
			return input? 'true' : 'false';
			break;
		case 'Number':
			return '' + input + '';
			break;
		case 'Function':
			return '' + input + '';
			break;
		case 'Array':
			return '[' + input.map(stringify).join() + ']';
			break;
		case 'Object':
			var toReturn = '{';
			for (k in input){
				toReturn += '\"' + k + '\": ' + stringify(input[k]) + ',';
			}
			return toReturn.slice(0, -1) + '}';
			break;
	}
}