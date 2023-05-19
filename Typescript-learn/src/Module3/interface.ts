type User={
    name:string;
    age:number;
};

// interface type --- object typer khetre

interface IUser{
    name:string;
    age:number;
}
interface extendedUser extends IUser{
    role:string;
}
interface IExtendedUser extends IUser{
    role:string;
}


const userWithTypeAlias:User={
    name:'Type Alias',
    age:100,
}

// const userWithTypeInterface:User={
//     name:'Interface',
//     age:200,
// }


const user:extendedUser={
    name:"jahanara",
    age:32,
    role:"engineer"
}


type rollNumber=number;
//object, function, array
type addNumberType={
    (num1 :number, num2 :number):number
}
//const addNumber=(num1 :number, num2 :number):number=>num1+num2
const addNumber:addNumberType=(num1 , num2 ):number=>num1+num2

interface IAddNumbers{
    (num1 :number, num2 :number):number
}

type rollNumbersType=number[];
const rollNumbers:rollNumbersType=[1,3,5,7,] // index thake

interface IrollNumbers{
[index:number]:string
}
const IrollNumbers:IrollNumbers=['1','3','5', '7',] // index thake

