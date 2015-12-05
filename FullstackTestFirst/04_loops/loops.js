function repeat(str, num){
  var toReturn = "";
  while (num > 0){
  	toReturn += str;
  	num--;
  };
  return toReturn;
}

function sum(arr){
	var toReturn = 0;
	for (var num = 0; num < arr.length; num++){
		toReturn += arr[num];
	};
	return toReturn;
}

function gridGenerator(num){
	var str = "";
	for (var i = 0; i < num; i++){
		for (var j = 0; j < num; j++){
			if ((i+j) % 2 == 0){
				str += "#";
			}
			else{
				str += " ";
			}
		};
		str += "\n";
	};
	return str;
}

function largestTriplet(c){
	for (var b = c; b > 0; b--){
		for (var a = b; a > 0; a--){
			if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)){
				return [a,b,c];
			}
		};
	};
	return largestTriplet(c-1);
}

function join(arr, delimiter){
	var toReturn = "";
	for (var i = 0; i < arr.length; i++){
		if ((delimiter === undefined) || (i == arr.length - 1)){
			toReturn += arr[i];
		}
		else{
			toReturn += arr[i];
			toReturn += delimiter;
		}
	};
	return toReturn;
}

function paramify(obj){
	var arr = [];
	var toReturn = "";
	for (key in obj){
		if (obj.hasOwnProperty(key)){
			arr.push(key + "=" + obj[key] + "&");
		}
	};
	arr.sort();
	arr.forEach(function(x){toReturn += x});
	if (toReturn.substr(toReturn.length - 1) == "&"){
		toReturn = toReturn.slice(0, -1);
	}
	return toReturn;
}