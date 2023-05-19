"use strict";
class Parent {
    constructor(name, age, address, designation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours}`;
    }
}
// class Student {
//     names: string;
//     ages: number;
//     address: string;
//     constructor(names: string, ages: number, address: string) {
//         this.names = names;
//         this.ages = ages;
//         this.address = address;
//     }
//     makeSleep(hours: number): string {
//         return `this ${this.names} will sleep for ${hours}`
//     }
// }
class Teacher {
    constructor(name, age, address, designation) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    takeClasses(nameOfClass) {
        return `this ${this.name} will take ${nameOfClass} class`;
    }
}
class students extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address, designation);
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours}`;
    }
}
class Master extends Parent {
    constructor(name, age, address, designation, friends) {
        super(name, age, address, designation);
        this.friends = friends;
    }
    makeFriends(numOfFriends) {
        return ` this are ${this.friends} are in the class ${numOfFriends} `;
    }
}
const teacher1 = new Teacher("mr k", 45, "kolkata", "teacher");
// teacher1.
