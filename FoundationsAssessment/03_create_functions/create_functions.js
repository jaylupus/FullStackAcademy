function createFunctions(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		(function(a){
			arr.push(function(){return a});
		})(i);
	}
	return arr;
}