import { add as addTwo, substract } from './module';
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
//global scope a naming conflict thakbena
const result = addTwo(5, 6);
const subResult = substract(20, 10);
