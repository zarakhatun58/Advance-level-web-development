type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newType="name" | "age" | "address";
type newTypeUsingKeyOf =keyof PersonType


function getProperty<X,Y extends keyof X>(obj:X,key:Y){
obj[key]
}
const property=getProperty({name:"mr x", age:56 }, 'age');
// const a={
//     name:"mr x",age:56

// }
// a['age']
// {
//     name:"mr x";
//     age:56
// }