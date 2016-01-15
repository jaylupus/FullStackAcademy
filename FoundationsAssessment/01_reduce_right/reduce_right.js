function reduceRight(arr, start, func){
	var count = arr.length;
	while (count > 0){
		count--;
		start = func(start, arr[count]);
	}
	return start;
}

function reduceRightRecursive(arr, start, func){
	if(arr.length === 0){
		return start;
	}
	else{
		start = func(start, arr[arr.length - 1]);
		arr = arr.slice(0, arr.length - 1);
		return reduceRightRecursive(arr, start, func);
	}
}