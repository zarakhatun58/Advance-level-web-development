"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('there is nothing to start');
    }
    else {
        console.log('start');
    }
};
searchName(null);
//unknown type
//kmh^-1 -convert--> ms^-1
const getMyCarSpeed = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my speed ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(''); // ['10', 'kmh^-1 ']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`my speed ${convertedSpeed}`);
    }
    else {
        console.log(`wrong type`);
    }
};
getMyCarSpeed(10);
getMyCarSpeed('10 kmh^-1');
getMyCarSpeed(true);
//never type
function throwError(message) {
    throw new Error(message);
}
throwError('error done');
