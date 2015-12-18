function Mammal(){
	this.name = arguments[0];
	this.offspring = [];

}

Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a Mammal";
}

Mammal.prototype.haveBaby = function(){
	var baby = new Mammal();
	baby.name = "Baby " + this.name;
	this.offspring.push(baby);
	return baby;
}

function Cat(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.haveBaby = function(color){
	var baby = new Cat();
	baby.name = "Baby " + this.name;
	baby.color = color;
	this.offspring.push(baby);
	return baby;
}