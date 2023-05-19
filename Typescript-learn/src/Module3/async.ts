//string tyope
const makePromise = () => {
    new Promise<string>((resolve, reject) => {
        const data:string = 'data is fetched'
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetch")
        }
    })
}



// async er khetre promise hobe Promise<boolean>, Promise<string>, Promise<object>

const getPromiseData=async (): Promise<void>=>{
    const data= await makePromise();
    // console.log(data)
    return data;
}

//boolean type

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data:boolean = true;
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetch")
        }
    })
}
const getPromiseDataBoolean=async (): Promise<boolean>=>{
    const data= await makePromiseBoolean();
    // console.log(data)
    return data
}

type dataType={
data:string
}
const makePromiseObject= (): Promise<dataType> => {
    return new Promise<dataType>((resolve, reject) => {
        const data:dataType = {data:"data is fetched"};
        if (data) {
            resolve(data)
        } else {
            reject("failed to fetch")
        }
    })
}
const getPromiseDataObject=async (): Promise<dataType>=>{
    const data= await makePromiseObject();
    // console.log(data)
    return data
}

// fetch api json place holder

interface ITodo{
userId:number,
id:number,
title:string,
completed:boolean
}
const getTodo= async():Promise<ITodo> =>{
    const response =await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //const data =await response.json()
   return await response.json()
}

const getTodoData=async()=>{
    const result=await getTodo;
    console.log(result)
}

getTodoData()

//npx ts-node-dev src/Module3/async.ts
//npx ts-node-dev src/Module4/object.ts