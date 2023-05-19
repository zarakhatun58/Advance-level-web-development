"use strict";
let emni;
emni = "next level wendevelopment";
emni.length;
emni.length;
function kgToGram(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `the converted result is:${value} gram`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}
//const resultToBeNumber= kgToGram(1000) as number;
const resultToBeNumber = kgToGram(1000);
//const resultToBeString=kgToGram("1000") as string;
const resultToBeString = kgToGram("1000");
try {
}
catch (err) {
    console.log(err.message);
}
