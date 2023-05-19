const arrayOfNumber=[1,2,3,4] ; // ['1', '2','3']

const arrayOfString=arrayOfNumber.map((number)=>number.toString());
console.log(arrayOfString);

type AreaNumber={
    height:number;
    width:number;
}
type AreaString={
    height:number;
    width:number;
}
type volume={
    height:number;
    width:number;
    depth:number;
}

type area={
    //[key in 'jaana' |'zara' ]: number
    //[key in 'height' |'width' ]: string
    //[key in keyof volume ]: boolean
    [key in keyof volume ]: volume[key]
}
// generic- type
type areas<T>={
    [key in keyof T ]: T[key]
}

const area11:areas<{height:number, width:string }>={height:20, width:'40'}

type AreaReadOnly={
    readonly height:number;
    readonly width:number;
}
const rectangleArea:AreaReadOnly={
    height:20,
    width:30,
}
// const rectangleArea:AreaNumber={
//     height:20,
//     width:30,
// }
//rectangleArea.width=20

type A11 =AreaNumber['height']
type B =keyof AreaNumber

// const obj={
//     name:'jahanara'
// }
// obj['name']

function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];
  
    return item[key];
  
  }
  
  
  
  const users = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
  
  console.log(getArrayItem(users, 0, 'name'))



  interface Person {

    firstName: string;
  
    lastName: string;
  
  }
  
  
  
  function fullNames<T extends Person>(person: T): string {
  
    return `${person.firstName} ${person.lastName}`;
  
  }