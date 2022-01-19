/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function (){
  return `${this.name}, ${this.age}`;
}

//new people

const sallie = new Person('Sallie', 26);
const mark = new Person('Mark', 30);
const cori = new Person('Cori', 25);

console.log(sallie.toString());
console.log(mark.toString());
console.log(cori.toString());

mark.eat('pizza');
mark.eat('sushi');
mark.eat('sandwich');
mark.eat('cake');
mark.eat('tacos');
mark.eat('ramen noodles');

console.log(mark.stomach)

mark.poop();

console.log(mark.stomach)







//method = prototype
// ability

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(numOfGallons) {
  if(numOfGallons > 0){
    this.tank = this.tank + numOfGallons

  }
  return this.tank
}

Car.prototype.drive = function(distance){
  const availableMiles = this.tank * this.milesPerGallon
  if(distance > this.tank * this.milesPerGallon){
    this.odometer = this.odometer + distance
    let minusFuel = distance/this.milesPerGallon 
    this.tank = this.tank - minusFuel
    console.log (`I ran out of fuel at ${availableMiles +this.odometer - distance} miles!`)
  } else {
  this.odometer = this.odometer + distance
  let minusFuel = distance/this.milesPerGallon 
  this.tank = this.tank - minusFuel
  }
}

const kia = new Car('Kia', 32)



console.log(kia)
kia.fill(2)
kia.drive(65)
// console.log(kia)

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age)
 this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

const brady = new Baby('Brady', 3, 'trains')

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - bad practice, it is binding this to the window object because you haven't defined it yet. 
  2. Implicit Binding - binding is implied when we invoke the function. 'this' is referring to what's left of the dot.
  3. Explicit Binding - would be when we .call, .bind. or .apply either immediately invoking the function or not and passing in the arguments 1 by 1 or as an array
  4. New Binding - When a function is invoked as a constructor using new keyword and creates a new object
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}