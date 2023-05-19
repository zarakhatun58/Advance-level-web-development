"use strict";
class Persons {
    takeNap() {
        console.log('i am sleeping');
    }
}
class Students extends Persons {
    takeNap() {
        console.log(`I am sleeping 10 hours perday`);
    }
}
class Developer extends Persons {
    takeNap() {
        console.log(`I am sleeping 5 hours perday`);
    }
}
function getNap(param) {
    param.takeNap();
}
const persons1 = new Persons();
const persons2 = new Students();
const persons3 = new Developer();
getNap(persons1);
getNap(persons2);
getNap(persons3);
class Shape {
    getArea() {
        return 0;
    }
}
// area =>pi r*r
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea);
}
getAreaOfShape(new Circle(20));
