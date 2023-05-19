"use strict";
const arrayOfNumber = [1, 2, 3, 4]; // ['1', '2','3']
const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfString);
const area11 = { height: 20, width: '40' };
const rectangleArea = {
    height: 20,
    width: 30,
};
// const obj={
//     name:'jahanara'
// }
// obj['name']
function getArrayItem(arr, index, key) {
    const item = arr[index];
    return item[key];
}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'));
function fullNames(person) {
    return `${person.firstName} ${person.lastName}`;
}
