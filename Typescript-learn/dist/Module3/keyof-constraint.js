"use strict";
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty({ name: "mr x", age: 56 }, 'age');
// const a={
//     name:"mr x",age:56
// }
// a['age']
// {
//     name:"mr x";
//     age:56
// }
