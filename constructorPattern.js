// Each of the following are ways to create a new empty object:

var newOBject = {};
var newObject = Object.create( Object.prototype );
var newObject = new Object();

// We can then add keys and values in different ways:

// 1. Dot syntax
newObject.someKey = 'Hello World';

// 2. With square brackets
newObject["someKey"] = 'Hello World';

// 3. Define the property method of the Object object.
Object.defineProperty (newObject, 'someKey', {
  value: 'for more control of the propertys behavior',
  writable: true,
  enumerable: true,
  configurable: true
})

// 4. Define properties
Object.defineProperties ( newObject, {
  'someKey': {
    value: 'Hello World',
    writable: true
  },
  'anotherKey': {
    value: 'Foo bar',
    writable: false
  }
});

// How to use prototypes
function Car( model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + 'has done ' + this.miles + ' miles';
};

// Usages:

var civic = new Car( 'Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log( civic.toString()); // We now have a toString method that can be shared between both Car objects
console.log( civic.toString());

