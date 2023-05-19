"use strict";
class BankAccount2 {
    constructor(id, name, balance) {
        this.id = id,
            this.name = name,
            this._balance = balance;
    }
    //getter
    get balance() {
        return this._balance;
    }
    // getBalance():number{
    //   return this._balance
    // }
    //setter 
    set Deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount2 = new BankAccount2(444, 'jahanara', 54736);
// console.log(myAccount2)
// myAccount2.addDeposit(29);
// myAccount2.getBalance();
// myAccount2.balance=29 ;
//  console.log(myAccount2.balance)
//console.log(myAccount2.getBalance)
myAccount2.Deposit = 29;
console.log(myAccount2.Deposit);
//protected
// class StudentAccount extends BankAccount{
//     test(){
// this.
//     }
// }
// encapsulation ***
class BankAccount4 {
    constructor(id, name, balance) {
        this.id = id,
            this.name = name,
            this._balance = balance;
    }
    getTestBalance() {
        return this._balance;
    }
    get Test() {
        return this.getTestBalance();
    }
    get balance() {
        return this._balance;
    }
    set Deposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentsAccounts extends BankAccount4 {
    test() {
        this.Test;
    }
}
class AA {
    constructor(num) {
        this.num = num;
    }
}
class BB extends AA {
    constructor(num) {
        super(num);
    }
}
