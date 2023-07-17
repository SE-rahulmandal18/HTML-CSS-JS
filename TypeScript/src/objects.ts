class Car{
    name : string;
    mileage : number;

    constructor(name : string, mileage : number){
        this.name = name;
        this.mileage = mileage;
    }
}

// let car1 = new car("Ford", 100); // in JS
let car1:Car = new Car("Ford", 100); // in TS