class Parent {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
    makeSleep(hours: number): string {
        return `this ${this.name} will sleep for ${hours}`
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
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    takeClasses(nameOfClass: number): string {  //difference class
        return `this ${this.name} will take ${nameOfClass} class`
    }

}

class students extends Parent {

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address, designation)
    }
    makeSleep(hours: number): string {
        return `this ${this.name} will sleep for ${hours}`
    }

}

class Master extends Parent {
    friends: string
    constructor(name: string, age: number, address: string, designation: string , friends:string){
    super(name, age, address, designation)
    this.friends = friends

}
makeFriends(numOfFriends:number):string{
return ` this are ${this.friends} are in the class ${numOfFriends} `
}
}

const teacher1 =new Teacher("mr k", 45, "kolkata", "teacher");
// teacher1.