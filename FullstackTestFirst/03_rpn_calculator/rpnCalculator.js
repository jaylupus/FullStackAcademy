var RPNCalculator = function(){
	this.arr = [];
};

RPNCalculator.prototype.value = function(){return this.arr[this.arr.length - 1]};

RPNCalculator.prototype.push = function(n){this.arr.push(n)};
	
RPNCalculator.prototype.plus = function(){
		if (this.arr.length == 0){
			throw "rpnCalculator is empty";
		}
		else{
			this.push(this.arr.pop() + this.arr.pop());
		}
	};
	
RPNCalculator.prototype.minus = function(){
		if (this.arr.length == 0){
			throw "rpnCalculator is empty";
		}
		else{
			this.push(-(this.arr.pop() - this.arr.pop()));
		}
	};
	
RPNCalculator.prototype.times = function(){
		if (this.arr.length == 0){
			throw "rpnCalculator is empty";
		}
		else{
			this.push(this.arr.pop() * this.arr.pop());
		}
	};
	
RPNCalculator.prototype.divide = function(){
		if (this.arr.length == 0){
			throw "rpnCalculator is empty";
		}
		else{
			this.push((1 / this.arr.pop()) * this.arr.pop());
		}
};