function Laptop(year, size){
	this.year = year;
	this.hd = size;
}

Laptop.prototype.checkSpecs = function(){
	return "Year: " + this.year + ", HD: " + this.hd;
}

function Macbook(year, size, color){
	Laptop.apply(this, [year, size]);
	this.color = color;
}

function extendWithObjectCreate(heir, ancestor){
	heir.prototype = Object.create(ancestor.prototype);
}

function extendWithNewKeyword(heir, ancestor){
	heir.prototype = new ancestor();
}