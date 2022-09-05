//kata kunci this pada object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};
console.log(dog.sayLegs());

// Define a Constructor Function
function Dog (){
  this.name = "Doggy";
  this.color = "black";
  this.numLegs = 4;
}
let ajg = new Dog();
console.log(ajg);

// Extend Constructors to Receive Arguments
function Dog2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog2("Doggy", "Red");
console.log(terrier);

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(6);
console.log(myHouse instanceof House);

// Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps);

// Use Prototype Properties to Reduce Duplicate Code
function Dog3(name) {
  this.name = name;
}
Dog3.prototype.kaki = 4;
let beagle = new Dog3("Snoopy");
console.log(beagle);

// Iterate Over All Properties
function Bird(name) {
  this.name = name;  //own property
}
Bird.prototype.numLegs = 2; // prototype property
let duck = new Bird("Donald");
let ownProps2 = [];
let prototypeProps = [];
for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps.push(property);
  }
}
console.log(ownProps2);
console.log(prototypeProps);

// Understand the Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("Chirp, chirp!");
})();

// Use an IIFE to Create a Module
let funModule  = (function(){
  return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
        return true;
        };
      },

      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
  }
})();