"use strict";
//const addMeInMyCrusMind=<T extends {name:string, age:number, salary:number}>(myInfo:T)=>{
const addMeInMyCrusMind = (myInfo) => {
    const results = addMeInMyCrusMind(myInfo);
    const newData = Object.assign(Object.assign({}, myInfo), { crus });
    return newData;
};
const myInfo = {
    name: 'jahanara',
    age: 100,
    salary: 50000,
    other1: false,
    other2: null,
};
const result5 = addMeInMyCrusMind(myInfo);
// result5.
// {
//     name:'mr kasem'
// }
