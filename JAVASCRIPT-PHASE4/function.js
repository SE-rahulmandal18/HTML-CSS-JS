// Before ES6

function add(x, y) {
   return x + y;
}

let result  = add(4, 5);
console.log(result);

// In JS we can use function to create objects

function Car(name, color) {
   this.name = name;
   this.color = color;

   this.display = function() {
      return "[" + this.name + ", " + this.color +"]"
   }

};

car1 = new Car("fortuner", "blue");
console.log(car1.name);
console.log(car1.color);

// In JS we can use function to create objects

function Car(name, color) {
   this.name = name;
   this.color = color;

   this.display = function() {
      return "[" + this.name + ", " + this.color +"]"
   }

};

car1 = new Car("fortuner", "blue");
console.log(car1.name);
console.log(car1.color);

console.log(car1.display());


// After ES6

// New way of decl functions (Arrow function)

console.log("\n\n********After ES6**********");

add_new = (x, y) =>{
   // do something in 2 or more lines
   return x + y;

};

add_new1 = (x, y) =>  x + y;  // aliter for one line statement

console.log(add_new(40,50));
console.log(add_new1(400,500));


// Creating objects using ES6 features
console.log("\n\n***Creting objects using ES6 Features *****");

class Bus {

   constructor(name, color) {
      this.name = name;
      this.color = color;
   }

   display() {
      return "[" + this.name + ", " + this.color + "]"
   }
};

bus1 = new Bus("Volvo", "red");
console.log(bus1.name);

console.log(bus1.display());



// Creating Objects using ES6 features
console.log("\n\n***** Inheritance in ES6 ********");

class LuxuryBus extends Bus {

    constructor(name, color, hasAC, hasVideoPlayer){
        super(name, color);
        this.hasAC = hasAC;
        this.hasVideoPlayer=hasVideoPlayer;
    }

    // override the super class's display
    /*
    display() {
        return super.display() + ", [AC="  + this.hasAC + ",VIDEO=" + this.hasVideoPlayer + " ]";
    }
   
    */

   // using arrow function
   display = () => super.display() + ", [AC="  + this.hasAC + ",VIDEO=" + this.hasVideoPlayer + " ]";
    
};


luxBus1 = new LuxuryBus("Toyota", "purple", true, false);
console.log(luxBus1.name);

console.log(luxBus1.display())


// function prototype
console.log("\n\n ****** function prototype ********");

function Car(name, color) {
   this.name = name;
   this.color = color;

   this.display = function () {
       return "[" + this.name + ", " + this.color + "]"
   }
};

car1 = new Car("Maruti", "red");
console.log(car1.name);
console.log(" 1 car1.noOfSeats = " + car1.noOfSeats);

console.log(car1.display());

// Use prototype to add new properties
// and to add additional methods.
Car.prototype.noOfSeats = 4;
console.log(" 2 car1.noOfSeats = " + car1.noOfSeats);

car2 = new Car("Swift", "red");
console.log(car1.name);
console.log(" 11 car2.noOfSeats = " + car2.noOfSeats);
car2.noOfSeats = 16;
console.log(" 12 car2.noOfSeats = " + car2.noOfSeats);

Car.prototype.display2 =  function () { return "Hello" };
console.log(car1.display2())