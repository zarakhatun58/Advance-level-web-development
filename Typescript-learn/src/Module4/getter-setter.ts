class BankAccount2 {
    //    readonly id: number;
    //     name: string;
    //     private _balance: number;
      public id: number;
      public name: string;
        //private _balance: number;
        public _balance: number;
    
        constructor(id: number, name: string, balance: number) {
            this.id = id,
                this.name = name,
                this._balance = balance
        }
        //getter
        get balance():number{
           return this._balance
        }
    // getBalance():number{
    //   return this._balance
      
    // }

    //setter 
    set Deposit(amount:number){
     this._balance=this._balance+amount
    }
    
    // addDeposit(amount:number){
    //     this._balance=this._balance+amount
    // }
    
    }
    
    const myAccount2=new BankAccount2(444, 'jahanara', 54736)
    // console.log(myAccount2)
    // myAccount2.addDeposit(29);
    // myAccount2.getBalance();
    // myAccount2.balance=29 ;
    //  console.log(myAccount2.balance)
    //console.log(myAccount2.getBalance)
    myAccount2.Deposit=29 ;
    console.log(myAccount2.Deposit)
    
    
    //protected
    
    // class StudentAccount extends BankAccount{
    //     test(){
    // this.
    //     }
    
    // }
// encapsulation ***
    class BankAccount4 {
          public id: number;
          public name: string;
      private _balance: number;
           
        
            constructor(id: number, name: string, balance: number) {
                this.id = id,
                    this.name = name,
                    this._balance = balance
            }

         private getTestBalance() :number{
            return this._balance
         } 
          get Test():number{
            return this.getTestBalance()
          }
            get balance():number{
               return this._balance
            } 
        set Deposit(amount:number){
         this._balance=this._balance+amount
        }
        }

        class StudentsAccounts extends BankAccount4{
            test(){
                this.Test
            }
        }

        class AA {

            num: number;
          
            constructor(num: number) {
          
              this.num = num;
          
            }
          
          }
          
          
          
          class BB extends AA {
          
            constructor(num: number){
          
              super(num)
          
            }
          
          }