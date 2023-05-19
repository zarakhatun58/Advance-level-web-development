"use strict";
//ternary-operator
var _a, _b;
const age = 22;
if (age >= 18) {
    console.log("yes");
}
else {
    console.log("no");
}
//convert to ternary-operator
const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
//Nullish Coalescing operator ?? use { null and undefined er khetre kaj kore}
//null and undefined
//const isAuthenticateUser =null;
const isAuthenticateUser = "";
const userName = isAuthenticateUser !== null && isAuthenticateUser !== void 0 ? isAuthenticateUser : 'Guest';
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest';
//console.log(userName);
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'jahanara',
    age: 23,
    address: {
        city: 'no city',
        road: 'no road',
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : ' No home'; // default "no home"
console.log({ home });
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
