//r utility types means pick

interface Person{
name:string;
//email:string;
email?:string; //optional 
contactNo:number

}

//Pick jegulolagbe segulo use korbo
//type Email=Pick<Person, "email">; 
type contactNo=Pick<Person, "contactNo" | "email">;

//Pick er oppisite Omit, jegula lagbe na segula fele diye baki use korbo

type Name =Omit<Person, "email"|"contactNo">;

//pertial and Required type 
//to make all the property optional
type Optional= Partial<Person>;
type RequiredProps=Required<Person>  // sobgulo property ke optional banabe



const person: Readonly<Person>={
    name:"jahanara",
    email:"jk@gmail.com",
    contactNo:77676,

}
personalbar.name="forhan";

//Record Type

// type myObj={
//     a:string;
//     b:string;
//     c:string
// }

// using index signature

//type myObj={
//    [ key:string]:string
//    [ key: 'a' | 'b' | 'c']:string
//}

type myObj=Record<'a' | 'b' |'c' |'d', string>
const obj: myObj={
    a:'1',
    b:'3',
    c:"fog",
    d:"4"  // d propery nei key use kore kora jai
}


