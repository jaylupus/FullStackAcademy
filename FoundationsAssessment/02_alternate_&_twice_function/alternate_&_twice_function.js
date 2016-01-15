function alternate(func){
	var even = true;
	return function(){
		if (even){
			func();
		}
		even = ! even;
	}
}

function twice(func){
	var count = 2;
	return function(){
		if (count > 0){
			count--;
			return func();
		}
		else{
			return 0;
		}
	}
}