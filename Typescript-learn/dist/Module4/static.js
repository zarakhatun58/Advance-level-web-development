"use strict";
class Counter {
    // constructor(counter:number){
    //     this.counter=counter
    // }
    // increment():number{
    static increment() {
        //return (this.counter=this.counter +1)
        return (Counter.counter = Counter.counter + 1);
    }
    // decrement():number{
    static decrement() {
        // return (this.counter=this.counter-1)
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
// const instance1=new Counter(0);
// const instance2=new Counter(1);
const instance1 = new Counter();
const instance2 = new Counter();
// console.log(instance1.increment()); //0-1
// console.log(instance1.decrement());//1-2
console.log(Counter.increment()); //0-1
console.log(Counter.decrement()); //1-2
