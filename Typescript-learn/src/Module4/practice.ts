//1 convert to Tuple
const userInfo=[101, "Ema", "Jhon", true, ,"2023"];

type userInfoTuple<A,B,C,D,E,F>=[A,B,C,D,E,F];
const relationInfo:userInfoTuple<number, string,string, boolean,any, string >=[101, "Ema", "Jhon", true, ,"2023"]
console.log(relationInfo);

// two array return one array for common number

const firstArray=[1,2,3,4,5];
const secondArray=[2,4,6,8]

const data=[...firstArray,...secondArray ]
console.log(data)

//const newArrays=data.reduce((a, b) => a.filter(c => b.includes(c)))
//console.log(newArrays);
for (let element of secondArray) {
    firstArray.push(element);
 }
