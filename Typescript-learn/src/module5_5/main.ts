//import * as methods from './module';
//import {average, substract, } from './module';
// import addTwo from './utils/add';
// import substract from './utils/substract';
import methods from "./utils/index";


// const add =(param1:number, param2:number, param3:number):number=>{

// return param1+param2+param3
// }

//1. global scope a naming conflict thakbena
// const result = addTwo(5, 6);
// const subResult=substract(20, 10)

//2. import * as method  kore sob gulo eksathe import hoye jabe etake bole wild card import

// const result =methods.divide(5,10)
// const resultSub =methods.substract(5,10)


//3. export default
// const res=average(3, 9);
// const addResult=substract(3, 9);

//4. export from another file

// const results=addTwo(3,5)
// const result2=substract(3,5)

//5. from via index

const result2=methods.substract(3,5)
const results=methods.addTwo(3,5)