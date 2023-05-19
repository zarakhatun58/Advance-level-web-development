"use strict";
// interface IVehicle{
//     name:string;
//     modal:string
// }
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log('i am starting the vehicle');
    }
    stopEngine() {
        console.log('i am starting the vehicle');
    }
    move() {
        console.log('stop vehicle');
    }
    test() {
        console.log('i am testing the vehicle');
    }
}
const Vehicles1 = new Vehicle("car", "toyoty", 23434);
// abstract class
class Vehicle3 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log('stop vehicle');
    }
}
class Car extends Vehicle3 {
    startEngine() {
        console.log('i am starting the vehicle...');
    }
    stopEngine() {
        console.log('i am starting the vehicle..');
    }
    test() {
        console.log('i am testing the vehicle..');
    }
}
//const car2 =new Vehicle3('car', 'honda', 98989)
//crash2.
