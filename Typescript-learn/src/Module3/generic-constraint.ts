type mandatoryTypes={name:string, age:number, salary:number}

interface MandatoryInterface{name:string, age:number, salary:number}
//const addMeInMyCrusMind=<T extends {name:string, age:number, salary:number}>(myInfo:T)=>{
const addMeInMyCrusMind=<T extends mandatoryTypes>(myInfo:T)=>{
    const results=addMeInMyCrusMind(myInfo);
    const newData={...myInfo, crus}
    return newData
}

type MyInfoType={
    name:string,
    age:100,
    salary:number,
    other1:boolean,
    other2:null
    }
const myInfo:MyInfoType={
    name:'jahanara',
    age:100,
    salary:50000,
    other1:false,
    other2:null,
}

const result5=addMeInMyCrusMind(myInfo);
// result5.

// {
//     name:'mr kasem'
// }
