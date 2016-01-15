describe("keyAdder", function(){
	it("keyAdder is a function", function(){
		expect(typeof keyAdder === 'function').toEqual(true);
	});

	it('returns a number value', function(){
		var total = keyAdder.call({a1:1,a2:3,a3:5});
		expect(typeof total === 'number').toEqual(true);
	});

	it("is designed to be called within an object's context, do not create conditions if called in the global space", function(){
		var myObj = {a0: keyAdder, a1:1, a2: 2}
		var total = keyAdder.call({a1:4,a2:5,a3:6});

		expect(typeof total === 'number').toEqual(true);
		expect(typeof myObj['a0']()==='number').toEqual(true);
	});

	it("adds all the keys with number values and returns their sum", function(){		
		var total = keyAdder.call({a1:4, a2:22, a3:[1,2,3], a4:"Fullstack", a5:10});
		expect(total).toEqual(36);
	});

	it("skips properties of the object's prototype", function(){
		var NumberObj = function(){
			this['a0'] = 0;
			this['a5'] = 5;
			this['a10'] = 10;
			this['a15'] = 15;
		}

		NumberObj.prototype['a20'] = 20;
		NumberObj.prototype['a25'] = 25;

		var objectWithNumberVals = new NumberObj();

		expect(keyAdder.call(objectWithNumberVals)).toEqual(30);
	})
});
