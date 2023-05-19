import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload:IUser):Promise<IUser> => {
    const user = new User(payload); //User -> class user -instance
        // id: "9",
        // role: "student",
        // password: "572888",
        // name: {
        //     firstName: "jahanara",
        //     middleName: "zara",
        //     lastName: "khatun",
        // },
        // dateOfBirth: "01/01/2023",
        // gender: "female",
        // email: "jk@gmail.com",
        // contactNo: "9767565453",
        // emergencyContactNo: "788798989",
        // presentAddress: "kolkata",
        // permanentAddress: "hirapur"

    // });
    await user.save(); // built in  instance methods custom instance methods  
    return user;
    // console.log(user.fullName())
      
}

export const getUserFromDB=async ():Promise<IUser[]>=>{
const users =await User.find();

return users;

}

export const getUserByIdFromDB=async (payload:string) :Promise<IUser | null>=>{

    const user =await User.findOne({id:payload})
    
//field filtering one data , another data can find by field
   // const user =await User.findOne({id:payload},{ name:1, contactNo:1},)

return user;
}

export  const getAdminUsersFromDB=async()=>{
    const admins =await User.getAdminUsers();
    return admins
}

//class --> Attach -> Method -> Directly call using class
//user = new user
//user getAdminUser





