describe("Laptop class", function() {
  var omrisLaptop;

  beforeEach(function() {

    omrisLaptop = new Laptop(2005, 500);

  });

  it('is a Constructor Function', function(){
    expect(typeof Laptop).toEqual('function');
  });

  it("should take a year and size as parameters", function() {
    expect(omrisLaptop.year).toEqual(2005);
    expect(omrisLaptop.hd).toEqual(500);
  });


  it("should have a `checkSpecs` function on its prototype", function() {
    expect(omrisLaptop.checkSpecs()).toEqual("Year: 2005, HD: 500");
    expect(omrisLaptop.hasOwnProperty("checkSpecs")).toEqual(false);
  });

});

describe("Macbook class", function() {
  var zekesMacbook;

  beforeEach(function(){
    spyOn(Laptop, 'apply').and.callThrough();
    zekesMacbook = new Macbook(2010, 1000, 'gold');
  });

  it('is a Constructor Function', function(){
    expect(typeof Macbook).toEqual('function');
  });

  it('should have the year, hd-size, and color', function(){
    expect(zekesMacbook.year).toEqual(2010);
    expect(zekesMacbook.hd).toEqual(1000);
    expect(zekesMacbook.color).toEqual('gold');
  });

  it('calls the Laptop Constructor', function(){
    expect(Laptop.apply).toHaveBeenCalled();
  });

});



describe('extendWithObjectCreate', function(){

  beforeEach(function(){
    spyOn(Object, 'create').and.callThrough();

    // extendWithObjectCreate invocation, the arguments passed are the constructor functions
    // created earlier in these specs.
    
    extendWithObjectCreate(Macbook, Laptop);
  });

  it('assigns the internal prototype (__proto__) of the first parameter\'s ".prototype" property to reference the second parameter\'s ".prototype" property', function(){

    expect(typeof Macbook).toEqual('function');
    expect(typeof Laptop).toEqual('function');

    // feel free to check out the docs on `Object.getPrototypeOf`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
    expect(Object.getPrototypeOf(Macbook.prototype)).toEqual(Laptop.prototype);

  });

  it("calls `Object.create` to create a new object and sets the new object's internal prototype (__proto__)", function(){

    expect(Object.create).toHaveBeenCalled();

  });

  it('can invoke the `checkSpecs` function from the `Laptop.prototype` object', function(){
    var myMacbook = new Macbook(2200, 2000);
    expect(myMacbook.checkSpecs()).toEqual("Year: 2200, HD: 2000");
    expect(myMacbook.hasOwnProperty("checkSpecs")).toEqual(false);
  });

  it('does not run the parent\'s constructor function during extension', function(){
    // Parent represents a constructor function
    var Parent = jasmine.createSpy();
    var Child = function () {};
    extendWithObjectCreate(Child, Parent);
    expect(Parent).not.toHaveBeenCalled();
  });

});

// EXTRA CREDIT - 3 Points

describe('extendWithNewKeyword', function(){

  beforeEach(function(){
    spyOn(Object, 'create').and.callThrough();
    // extendWithNewKeyword invocation, notice the arguments being passed
    extendWithNewKeyword(Macbook, Laptop);
  });

  it('assigns the internal prototype (__proto__) of the first parameter\'s ".prototype" property to reference the second parameter\'s ".prototype" property', function(){

    expect(typeof Macbook).toEqual('function');
    expect(typeof Laptop).toEqual('function');

    expect(Object.getPrototypeOf(Macbook.prototype)).toEqual(Laptop.prototype);

  });

  it("does not use `Object.create` to create a new object and set the new object's internal prototype (__proto__)", function(){

    // instead of `Object.create`
    expect(Object.create).not.toHaveBeenCalled();

  });

  it('can invoke the `checkSpecs` function from the `Laptop.prototype` object', function(){
    var myMacbook = new Macbook(2050, 300);
    expect(myMacbook.checkSpecs()).toEqual('Year: 2050, HD: 300');
    expect(myMacbook.hasOwnProperty("checkSpecs")).toEqual(false);
  });

  it('runs the parent\'s constructor function during extension', function(){
    // Parent represents a Constructor Function
    var Parent = jasmine.createSpy();
    var Child = function () {};
    extendWithNewKeyword(Child, Parent);
    expect(Parent).toHaveBeenCalled();
  });

});
