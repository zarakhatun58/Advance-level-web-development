//arrow function

const createArray = (param: string): string[] => {
    return [param]
}

//T -generic type
const createArray1 = <T>(param: T): T[] => {
    return [param]
}
const createArray4 = <X, Y>(param1:X,param2:Y): [X,Y] => {
    return [param1, param2]
}
function createArray6<X,Y>(param1:X,param2:Y):[X,Y]{
return [param1, param2]
}
//const result1 = createArray1<string>('india');
const result1 = createArray4<string, string>('i love my','india');
//const result2 = createArray1<boolean>(false);

const result2 = createArray4<boolean, Array<string>>(false, ["USA"]);
type Namee = { name: string }
const result3 = createArray1<Namee>(
    {
        name: "india"
    })

    //spread Operator
    const crus ='kate winstale';
   

    // const addMeInMyCrusMind=<T>(myInfo:T)=>{
    //     const results=addMeInMyCrusMind(myInfo);
    //     const newData={...myInfo, crus}
    //     return newData
    // }
    // const myInfo={
    //     name:'jahanara',
    //     age:100,
    //     salary:50000,
    // }

    // const result5=addMeInMyCrusMind(myInfo);


    const newData={...myInfo, crus};