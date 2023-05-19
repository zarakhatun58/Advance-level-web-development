"use strict";
//normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
const addArrow = (num1, num2) => num1 + num2;
const arr = [1, 3, 4, 7];
const newArray = arr.map((elem) => elem * elem);
const person = {
    name: 'jahanara',
    balance: 6,
    addBalance(money) {
        return `my new balance ${this.balance + money}`;
    }
};
