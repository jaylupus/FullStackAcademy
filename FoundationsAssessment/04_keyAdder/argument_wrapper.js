function keyAdder(){
	var sum = 0;
	for (var key in this){
		if ((this.hasOwnProperty(key)) && !(isNaN(this[key]))){
			sum += this[key];
		}
	}
	return sum;
}