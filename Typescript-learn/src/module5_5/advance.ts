//property

interface Model<TData, TMethods>{
    data:TData,
    methods:TMethods
}
interface IUser{
    firstName:string;
    lastName:string;
}

//methods
interface IMethods{
    fullName():string
}

//model
type modal=Model<IUser, IMethods>

class User implements model{
data:IUser,
methods:IMethods

constructor(firstName:string, lastName:string){
    this,data={firstName, lastName}
    this.methods={
        fullName()=>`${firstName} and ${lastName}`
    }
}
}

const user1=new UserActivation("jahara", 'khatun');

console.log(user1.methods.fullName);

