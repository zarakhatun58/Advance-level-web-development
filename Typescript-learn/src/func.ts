//normal function

function add(num1:number,num2:number):number{
return num1+ num2;
}
add(2,4);

const addArrow=(num1:number,num2:number):number=>num1+ num2;
const arr=[1,3,4,7];
const newArray=arr.map((elem:number) => elem*elem);


// const person={
//     name:'jahanara',
//     balance:6,
//     addBalance(money:number):string{
//         return `my new balance ${this.balance+money}`;
//     }
// }