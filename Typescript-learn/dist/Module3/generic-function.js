"use strict";
//arrow function
const createArray = (param) => {
    return [param];
};
//T -generic type
const createArray1 = (param) => {
    return [param];
};
const createArray4 = (param1, param2) => {
    return [param1, param2];
};
function createArray6(param1, param2) {
    return [param1, param2];
}
//const result1 = createArray1<string>('india');
const result1 = createArray4('i love my', 'india');
//const result2 = createArray1<boolean>(false);
const result2 = createArray4(false, ["USA"]);
const result3 = createArray1({
    name: "india"
});
//spread Operator
const crus = 'kate winstale';
// const addMeInMyCrusMind=<T>(myInfo:T)=>{
//     const results=addMeInMyCrusMind(myInfo);
//     const newData={...myInfo, crus}
//     return newData
// }
// const myInfo={
//     name:'jahanara',
//     age:100,
//     salary:50000,
// }
// const result5=addMeInMyCrusMind(myInfo);
const newData = Object.assign(Object.assign({}, myInfo), { crus });
