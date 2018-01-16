Function.prototype.inherit = function inherit(SuperClass) {
  function Surrogate() {}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherit2 = function inherit2(SuperClass) {
  this.prototype = Object.create(SuperClass.prototype);
  this.prototype.constructor = this;
};

function Animal(name) {
  this.name = name;
}

Dog.prototype.eat = function eat() {
  console.log(this.name + " ate a snack!");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.inherit(Animal);

Dog.prototype.bark = function bark() {
  console.log(this.name + " barked!");
};

const bill = new Dog("Bill");
bill.eat();
bill.bark();
