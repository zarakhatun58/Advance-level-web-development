"use strict";
class Animal {
    // name:string;
    // species:string;
    // sound:string;
    //    public name:string;
    //    public species:string;
    //    public sound:string;
    // parameter properties
    //constructor(name:string,species:string,sound:string) {
    constructor(name, species, sound) {
        // this.name=name;
        // this.species=species;
        // this.sound=sound;
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`the ${this.name} says ${this.sound}`);
    }
}
// arrow function e this property not work
const dog = new Animal("German shepard", "dog", "ghew ghew");
const cat = new Animal("jaana", 'cat', 'meu meu');
dog.makeSound();
cat.makeSound();
