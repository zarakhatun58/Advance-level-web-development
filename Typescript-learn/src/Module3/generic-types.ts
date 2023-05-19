

type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['jaana', 'wins katle'];

type RelationWithSalaryType = {
    name: string;
    salary: number
}

//object er khetre interface use

interface RelationWithSalaryinterface {
    name: string;
    salary: number
}

const relationWithSalary: GenericTuple<RelationWithSalaryinterface, string> = [
    {
        name: "Jaana",
        salary: 1799999
    },
    'wins katle'
]
// const relationWithSalary2: GenericTuple<{name:string, salary:number }, string> = [
//     {
//         name:'danis',
//         salary: 1799999
//     }
// ]

type GenericArray<T> = Array<T>;
//number type
//const rolNumber: number[] = [23, 45, 67, 89];
const rolNumber: GenericArray<number> = [23, 45, 67, 89];

//string type
//const rollNumber2: Array<string> = ['23', '45', '67', '89'];
const rollNumber2: GenericArray<string> = ['23', '45', '67', '89'];

// boolean type
//const rollNumber3: Array<boolean> = [true, false];
const rollNumber3: GenericArray<boolean> = [true, false];


//const userNameAndRolNumbers: Array<{ name: string; roll: number }> = [

type NameRolType = { name: string; roll: number }
const userNameAndRolNumbers: GenericArray<NameRolType> = [
    {
        name: "mr danis",
        roll: 2,
    },
    {
        name: "jana ",
        roll: 6,
    }
]

// add(x, y)
// add(5, 9,7)

interface CrushInterface<T, U =null> {
    name: string;
    husband: T;
    wife?:U;
}

interface HusbandInterface{
    name: string;
    salary:number
}
const crushh1: CrushInterface<boolean, string> = { name: "danish", husband: true, wife:"jaana" }
const crushh2: CrushInterface<string> = { name: "ansar", husband: "md" }
const crushh3: CrushInterface<Object> = {
    name: "ansar",
    husband: {
        name: "ansar",
        salary: 1989090
    }
}
interface PersonInterface{
    name: string;
    age:number
}
//const crushh4:CrushInterface<Object, object>={
const crushh4:CrushInterface<PersonInterface, PersonInterface>={
    name: "ansar",
    husband:{
        name:"danish",
        age:50,
    },
    wife:{
        name:"zara",
        age:20,
    }
}

