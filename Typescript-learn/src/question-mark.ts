//ternary-operator


const age: number = 22;
if (age >= 18) {
    console.log("yes")
}
else {
    console.log("no")
}

//convert to ternary-operator

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);
//Nullish Coalescing operator ?? use { null and undefined er khetre kaj kore}
//null and undefined

//const isAuthenticateUser =null;
const isAuthenticateUser = "";
const userName = isAuthenticateUser ?? 'Guest';
const userName2 = isAuthenticateUser ? isAuthenticateUser : 'Guest';
//console.log(userName);
console.log({ userName }, { userName2 });


type Manush = {
    name: string;
    age: number;
    address: {
        city: 'no city';
        road: 'no road';
        home?: "";
    }
}

const manush1: Manush = {
    name: 'jahanara',
    age: 23,
    address: {
        city: 'no city',
        road: 'no road',
    }
}

const home = manush1?.address?.home ?? ' No home' // default "no home"
console.log({ home });

function generateAdder(a: number): (b: number) => number {
    return function (b: number) {
        return a + b;
    };
}
    const addTwo = generateAdder(2);
    console.log(addTwo(3));

    console.log(addTwo(5))