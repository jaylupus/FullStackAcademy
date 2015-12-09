var RPNCalculator = function(){
	this.arr = [];
};

RPNCalculator.prototype.helper = function(func){
	if (this.arr.length == 0){
		throw "rpnCalculator is empty";
	}
	else{
		var x = this.arr.pop();
		var y = this.arr.pop();
		this.arr.push(func(x, y));
	}
};

RPNCalculator.prototype.value = function(){return this.arr[this.arr.length - 1]};

RPNCalculator.prototype.push = function(n){this.arr.push(n)};
	
RPNCalculator.prototype.plus = function(){
	this.helper(function(a,b){return (a+b)});
};
	
RPNCalculator.prototype.minus = function(){
	this.helper(function(a,b){return (b - a)});
};
	
RPNCalculator.prototype.times = function(){
	this.helper(function(a,b){return (a * b)});
};
	
RPNCalculator.prototype.divide = function(){
	this.helper(function(a,b){return (b / a)});
};