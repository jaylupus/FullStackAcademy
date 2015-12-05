function createCalculator(){
	var calc = {};
	calc.val = 0;
	calc.value = function(){return this.val};
	calc.add = function(n){this.val += n};
	calc.subtract = function(n){this.val -= n};
	return calc;
}