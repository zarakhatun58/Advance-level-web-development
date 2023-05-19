
type crushType = {
    name: string,
    age: number,
    profession: string,
    address: string
}

const crash1: crushType = {
    name: 'Danish',
    age: 34,
    profession: 'service man',
    address: 'kolkata'

}

const crash2: crushType = {
    name: 'Ansar',
    age: 36,
    profession: 'developer',
    address: 'kolkata'

}

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;
type CourseNameType = string;

const couseName: CourseNameType = 'Next level Web development';

type operationType=(x:number, y:number)=>number;

const calculate = (
    number1: number,
    number2: number,
    operation:operationType //(x,y)=> x-y) (10,20)=>10-20
    ) => {
    // return number1+number2
    return operation(number1, number2)
}

calculate(5, 7, (x, y) => x + y);
calculate(20, 4, (x, y) => x - y)
calculate(20, 5, (x, y) => x * y)
calculate(100, 4, (x, y) => x / y)
console.log(calculate)