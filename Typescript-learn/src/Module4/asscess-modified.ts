class BankAccount {
//    readonly id: number;
//     name: string;
//     private _balance: number;
   readonly id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
        this.id = id,
            this.name = name,
            this._balance = balance
    }
getBalance(){
    //return
    console.log(`My current balanceis ${this._balance}`)
}

addDeposit(amount:number){
    this._balance=this._balance+amount
}

}

const myAccount=new BankAccount(444, 'jahanara', 54736)
console.log(myAccount)
myAccount.addDeposit(29);
myAccount.getBalance();


//protected

// class StudentAccount extends BankAccount{
//     test(){
// this.
//     }

// }